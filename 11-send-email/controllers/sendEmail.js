const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
	let testAcct = await nodemailer.createTestAccount();
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "chyna.senger76@ethereal.email",
			pass: "zJAwprEG29DSft1p2X",
		},
	});

	let info = await transporter.sendMail({
		from: '"Yippee" <yippee_oooo@hotmail.com>',
		to: "alvi88lee@hotmail.com",
		subject: "Hello",
		html: "<h2>Sending Emails with Node.js</h2>",
	});
	res.json(info);
};

const sendEmail = async (req, res) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: "alvi88lee@hotmail.com", // Change to your recipient
		from: "yippee_oooo@hotmail.com", // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
	};
	const info = await sgMail.send(msg);
	res.json(info);
};

module.exports = sendEmail;
