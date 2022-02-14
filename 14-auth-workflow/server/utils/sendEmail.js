const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
	let testAcct = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport(nodemailerConfig);

	// send mail with defined transport object
	await transporter.sendMail({
		from: '"Super Sender 👻" <yippee_oooo@hotmail.com>', // sender address
		to,
		subject,
		html,
	});
};

module.exports = sendEmail;
