const nodemailer = require('nodemailer')

module.exports = {
    sendTestMail
}

function sendTestMail(req,res){
    sendMail(req.body.subject, req.body.message, req.body.email, req.body.name)
    res.redirect('/inquiries')
}

function sendMail(subject, name, email, message){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'kailahkonkel@gmail.com',
            pass: process.env.GOOGLE_APP_PASSWORD
        }
    });
    transporter.sendMail({
        from: 'kailahkonkel@gmail.com',
        to: 'kailahkonkel@gmail.com',
        subject: `${subject}`,
        text: `${name} 
        
        From:(${email})${message}`
    })
}