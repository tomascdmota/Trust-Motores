import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
const router = express.Router();



const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002, () => console.log("server running"));


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
        to: "gifermo2@gmail.com",
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
