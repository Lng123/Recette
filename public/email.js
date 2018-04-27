
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xx@gmail.com',
    pass: 'xxx'
  }
});

var mailOptions = {
  from: 'recette.group22@gmail.com',
  to: 'hwan5263@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});