const Inquiry = require('../models/inquiry')
const SMTPTransport = require('nodemailer/lib/smtp-transport')
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

module.exports = {
    index,
    create
}

function create(req,res){
    const smtp = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    })
    const mailOpt = {
        from: '',
        to: GMAIL_USER,
        subject: `New inquiry from ${req.body.name}`,
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
    SMTPTransport.sendMail(mailOpt, (error, response) => {
        if (error) {
            console.log('contact-failure')
        } else {
            console.log('contact-success!')
        }
    })
}

function index(req, res) {
    Inquiry.find({})
    .then(inquiries => {
      res.render('inquiries/index', { title: 'Inquiries', user: req.user })
    })
}
