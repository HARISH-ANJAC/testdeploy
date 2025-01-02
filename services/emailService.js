// emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'skcbcastudent@gmail.com',
      pass: 'yeaj intk rrqy gwmq'
    }
});


export const sendNewPasswordEmail = (email, newPassword,userName) => {
    const mailOptions = {
      from: 'skcbcastudent@gmail.com',
      to: email,
       subject: 'Testing deploy work on render.com',
     html: '<p>HI '+userName+' Testing deploy work on render.com is '+newPassword+'</p>',
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };

  