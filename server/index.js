import express from 'express';
const app = express();

import Users from "./models/Users";
import db from "./models/index.js";


app.use(express.json());


// gonna use JWT to know if the user is logged in or not. The token will exist inside the users browser
app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    // Checks if the user exists in the db using a query

    const user = await Users.findOne({Where:{username:username}})

     if(!user) res.status(400).json({error: "User doesn't exist"});

     res.json("LOGGED IN");
});

app.get("/panel", (req,res)=> {
    res.json('panel');
})

db.sequelize.sync().then(() => {
    app.listen
})