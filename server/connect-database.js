import mysql from 'mysql';
import express from 'express';
import cors from "cors";
import bcrypt, { hash } from "bcrypt"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';


const db = mysql.createConnection({
    // TODO make all of these env
    host: "login-database.cjo8nnyxv8ib.eu-west-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "Tcdm.2021",
    database:"trustmotores"
});

const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));


// Initializing session
app.use(session({
    key: "userId", // Name of the cookie
    secret: "usercookie",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    },
}))






app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Hashes pw before sending it to the db
    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err){
            console.log(err);
        }

        db.query(
            "INSERT INTO accounts (username, password) VALUES(?,?)",
            [username, hash],
            (err, result) => {
               
                if(err)
                {res.send({err: err});}
                else {
                    {res.send({message: "User added"})}
                }
               
            }
        );
    })

   
})

app.get("/login" , (req, res) => {
    if(req.session.user) { // Checks if there is an object with the name user (session)
        res.send({loggedIn: true, user: req.session.user}) // Sends the info of logged in true + the users session to the frontend
        // to be pulled in on the useEffect
    } else {
        res.send({loggedIn:false});
    }
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM accounts WHERE username = ?",
        username,
        (err, result) => {
            if(err)
            {res.send({err: err})};
            
            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if(response) {
                        // Here we create a session that will keep the result and whenever we refresh we are still logged in
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result)
                    } else {
                        res.send({message: "Wrong username/password combination"});
                    }
                });
            } 
                else {
                    res.send({message: "That user doesn't seem to exist"});
                    console.log("there was an error");
                }
        }
    );
})

app.listen(3001, () => {
    console.log("running on 3001");
})



db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected.");
})

