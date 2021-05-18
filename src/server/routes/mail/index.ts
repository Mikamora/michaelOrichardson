let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
import creds from '../../config';

let transport = {
  service: "yahoo",
  secure: false,
  auth: {
    user: creds.email.user,
    pass: creds.email.pass
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error: any, success: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req: any, res: any, next: any) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `
  let mail = {
    from: "mor7991@yahoo.com",
    to: 'mor7991@yahoo.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
  console.log("created message");

  transporter.sendMail(mail, (err: any, data: any) => {
    if (err) {
      console.log(err);
      res.send("error")
    } else {
      console.log("Email sent");
      res.json({
        status: 'success'
      })
    }
  })
})

export default router;