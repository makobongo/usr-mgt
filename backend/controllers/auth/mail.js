const transporter = require('../../config/mail')

exports.sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM_ADDRESS,
    to: "lokomoscou@strelizia.site",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });
  return res.json({
    message: info.messageId
  })
};