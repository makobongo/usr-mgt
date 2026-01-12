const transporter = require('../../config/mail')

exports.sendEmail = async (req, res) => {
    // generating random 6 numbers to use for 2 factor auth
    const verificationNumber = Math.floor(100000 + Math.random() * 900000);
    const info = await transporter.sendMail({
        from: process.env.MAIL_FROM_ADDRESS,
        to: "lokomoscou@strelizia.site",
        subject: "Your OTP Code",
        html: `<p style='font-size:14px;'>Hi, <br />We appreciate your partnership! Use OTP <b style='color:black;font-weight:bold;'>${verificationNumber}</b> to continue with your secure transaction. This OTP is valid for <b style='color:black;font-weight:bold;'>10 minutes</b> and can only be used once. For your security, please do not share this code with anyone.</p>`,
    });
    return res.json({
        message: info.messageId
    })
};