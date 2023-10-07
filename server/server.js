import express from "express";
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const email_to = process.env.EMAIL_TO;
const email_from = process.env.EMAIL_FROM;
const password = process.env.PASSWORD;

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;


// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin: *");
    res.header("Access-Control-Allow-Methods: *");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
  });


// Your other routes and configurations here

// Always send the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: `${email_from}`,
        pass: `${password}`,
    }
});


app.get('/', cors(),(req, res) => {
    res.send('Server is running');
  });
//post request

app.post("/send-email", cors(),(req, res) => {
    const { name, email, subject, message} = req.body;

    const mailOptions = {
        from: `${email_from}`,
        to: `${email_to}`,
        subject: `Cotacao de motor: ${subject}`,
        text: `Nome: ${name}\n Email: ${email}\n ${message}`,
    };


    transport.sendMail(mailOptions, (error, info) =>{
        if(error) {
            console.log(error);
            res.status(500).json({message: "Erro ao submeter."});
        } else {
           console.log("Formulário submetido com sucesso." + info.response);
           res.status(200).json({message: "Enviado com sucesso."});
        }
    });

});


app.post("/send-quote", cors(),(req, res) =>{
    const {matricula, email, contacto, partVal, state} = req.body;
    const quoteData ={
        from: `${email_from}`,
        to: `${email_to}`,
        subject: 'Pedido de Cotação',
        contacto: `Contacto: ${contacto}\n`,
        text: `Email: ${email}\nMatricula: ${matricula}\n${partVal}\n${state}`
    };
    transport.sendMail(quoteData, (error, info)=>{
        if(error) {
            console.error();
            res.status(500).json({message: "Erro ao submeter."});
        } else {
            console.log("Enviado com sucesso" + info.response);
            res.status(200).json({message: "Enviado com sucesso."});
        }
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
