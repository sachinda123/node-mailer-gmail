// import nodemailer from "nodemailer";
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "test@gmail.com",
    pass: "hssx leef feeb teer",
  },
});

var mailOptions = {
  from: "test@gmail.com",
  to: "test@gmail.com",
  subject: "Sending Email using Node.js",
  html: "<h1>ppppp!</h1>",
};

for (let i = 0; i < 2; i++) {
  console.log("i", i);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
