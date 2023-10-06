import express from "express";
<<<<<<< HEAD
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const email_to = process.env.EMAIL_TO;
const email_from = process.env.EMAIL_FROM;
const password = process.env.PASSWORD;

const app = express();
const port = process.env.PORT || 3001;


// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


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


app.get('/', (req, res) => {
    res.send('Server is running');
  });
//post request

app.post("/send-email", (req, res) => {
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


app.post("/send-quote", (req, res) =>{
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
=======
import cors from "cors";
import nodemailer from "nodemailer";
const router = express.Router();



const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("server running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "gifermo2@gmail.com",
        pass: 'Geral.gifermo2_2021'
    },
});

contactEmail.verify((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("Ready to send")
    }
});

router.post("/contact", (req, res) => {
    const {name, email, subject, message} = req.body;
    const mail = {
        from: name,
        to: "geral@trustmotores.com",
        subject: "Contact Form Submission",
        html: `<p>Nome: ${name}</p>
                <p>Email: ${email}</p>
                <p>Subject: ${subject}</p>
                <p>Mensagem: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json({status: "Error"});
        } else {
            res.json({status: "Message sent"});
        }
    })
});

router.post("/modal", (req, res) => {
    const {name, email, contact, message} = req.body;
    const mail = {
        from: name,
        to: "geral@trustmotores.com",
        html: `<p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Contacto: ${contact}</p>
        <p>Mensagem: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json({status: "Error"})
        } else {
            res.json({status: "Mensagem enviada"})
        }
    })
});



router.post("/getQuote", (req,res) => {
    const {mat, email, sub, part, spart} = req.body;
    const mail = {
        from: email,
        to: "geral@trustmotores.com",
        subject: sub,
        html: `<p>Mat: ${mat}</p>
        <p>Email: ${email}</p>
        <p>Assunto: ${sub}</p>
        <p>Peça: ${part}</p>
        <p>Estado da Peça: ${spart}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({status: "Error"})
        } else {
            res.json({status: "Mensagem enviada!"})
        }
    })
})
>>>>>>> origin/master
