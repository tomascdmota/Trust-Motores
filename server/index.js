



const mailer = nodemailer.createTransport({
    //SES: new AWS.SES()
    port: 1025,
})


await mailer.sendMail({
    from: `${args.fromName} <${args.fromEmail}>`,
    to: args.toEmail,
    subject: args.subject,
    text: args.text,
    html: `<div>${args.text}</div>`
})