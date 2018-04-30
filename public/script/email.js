
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var nodemailer = require('nodemailer');
var timers = require('timers');
console.log("entered");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'recette.group22@gmail.com',
    pass: 'setagroup22'
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