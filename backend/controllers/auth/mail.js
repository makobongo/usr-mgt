const transporter = require('../../config/mail')

exports.sendEmail = async (req, res) => {
    // generating random 6 numbers to use for 2 factor auth
    const verificationNumber = Math.floor(100000 + Math.random() * 900000);
    const info = await transporter.sendMail({
        from: process.env.MAIL_FROM_ADDRESS,
        to: "lokomoscou@strelizia.site",
        subject: "Your OTP Code",
        text: `Hi, We appreciate your partnership! Use OTP ${verificationNumber} to continue with your secure transaction. This OTP is valid for 10 minutes and can only be used once. For your security, please do not share this code with anyone.`,
        html: "<a href='sbong.xyz' target='_blank'>USER MANAGEMENT</a>", // HTML body
    });
    return res.json({
        message: info.messageId
    })
};