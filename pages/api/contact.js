export default async function (req, res) {
    require("dotenv").config();
  
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 2525,
      host: "smtp.mailtrap.io",
      auth: {
        user: "a449a0d627d7ca",
        pass: "319ff5c85956d5"
      },
     // secure: true,
      tls: {
        ciphers:'SSLv3'
    }
    });
    const mailData = {
      from: "maher@gmail.com",
      to: "gomemahero@gmail.com",
      subject: `Message From Usman Asif Dev`,
      //   text: req.body.message + " | Sent from: " + req.body.email,
      html: `
      <div><strong>Name:</strong> ${req.body.fullName}</div>
      <br/>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <br/>
      <div><strong>Phone:</strong> ${req.body.phone}</div>
      <br/>
      <div><strong>Message:</strong> ${req.body.message}</div>
      <br/>
      <p>Sent from:
        ${req.body.email}</p>`,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    res.status(200).json({ status: "OK" });
  }