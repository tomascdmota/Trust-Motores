import express, { response } from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors';
import bodyParser from 'body-parser';
import SMTPConnection from 'nodemailer/lib/smtp-connection';

// Gets app the acess the every express function
const app = express();
console.log("IT WORKSSSSS");




// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors)


app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li> Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `


        let transporter = nodemailer.createTransport({
            host: smtp.gmail.com,
            port: 465,
            auth: {
                user: "gifermo2@gmail.com",
                pass: "Geral.gifermo2_2021"
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: "gifermo2@gmail.com",
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            }
            console.log("Message sent: $s", info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})