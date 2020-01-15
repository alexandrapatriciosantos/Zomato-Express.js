const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a738f7dec9069c',
    pass: '5c74d38d7e579b',
  },
});

const sendNodemailer = (user) => {
  const mailOptions = {
    from: '9c2ec20c17-8ca9fa@inbox.mailtrap.io', // Sender
    to: `${user.email}`, // Recipients
    subject: 'Zomato Training', // Subject
    html: `
            <p>Welcome to our app, ${user.first_name}</p>
            <form action="http://localhost:3000/auth/confirm?email=${user.email}" method="POST">
                <input type="submit" value="Login to your account" >
            </form>

        `,
  };
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent.');
    }
    transporter.close();
  });
};
module.exports = sendNodemailer;
