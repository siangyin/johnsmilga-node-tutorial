const nodemailer = require("nodemailer");

const sendEmail = async () => {
	let testAcct = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "chyna.senger76@ethereal.email",
			pass: "zJAwprEG29DSft1p2X",
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Super Sender 👻" <siangyin916@gmail.com>', // sender address
		to: "yippee_oooo@hotmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	});
};

module.exports = sendEmail;
