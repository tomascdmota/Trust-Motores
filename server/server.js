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
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
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

