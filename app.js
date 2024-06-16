require('dotenv').config();
const nodemailer = require('nodemailer');

async function main() {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', 
    port: 587, 
    secure: false, 
    auth: {
        // Create a .env file and add sender Email address as EMAIL and password as PASSWORD
      user: process.env.EMAIL, // Your email from .env
      pass: process.env.PASSWORD, // Your email password from .env
    },
  });

  // Setting up email data
  let mailOptions = {
    from: `"XXXXX" <${process.env.EMAIL}>`, //Add your Name Here
    to: 'XXXXXX', // Enter the To Address here
    subject: 'NodeMailer Email', // Subject line
    text: 'This is a Nodemailer Generated Email', // Plain text body
    html: '<b>This is a Nodemailer Generated Email</b>', // HTML body
  };

//   Sending Email here
  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
}
main().catch(console.error);
