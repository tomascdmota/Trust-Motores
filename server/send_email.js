import axios from "axios";
import nodemailer from "nodemailer";

let testAccount = nodemailer.createTestAccount();


let transporter = nodemailer.transporter({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    },
});



// sending the email with the transport object
const {name, email, subject, message} = e.target.elements;

let info = await transporter.sendMail({
    from: email,
    to: "tomascdmota@gmail.com",
    subject: {subject},
    message: {message},
    html: {message}
}, () => function(err, info) {
    if(err){
        console.log(err);
    } 
    console.log(info);
})  