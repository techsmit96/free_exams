const nodemailer = require('nodemailer');

class EmailSender {
	transport;
	from;

	constructor() {
		this.transport = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			secure: false, // use SSL
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
			},
		});
		this.from = process.env.MAIL_USERNAME;
	}
	async sendMessage(from, to, subject, text, html) {
		let mailOptions = {
			from,
			to,
			subject,
			text,
			html,
		};

		await this.transport.sendMail(mailOptions);
	}

	sendOTPToUser(to, USER_NAME, OTP) {
		let mailOptions = {
			from: this.from,
			to,
			subject: `Forgot Password`,
			html: `<p>Dear ${USER_NAME},</p>

			<p>Your forgot password OTP is <h1 style="color:green;font-size:40px;">${OTP}</h1>.</p>`,
		};

		this.transport.sendMail(mailOptions);
	}
	sendLowStockAlert(to, items) {
		let mailOptions;
		let message = `
		<table border="1" width="100%">
                <thead>

                    <th style="width: 80px;">Name</th>
                    <th style="width: 40px;">Current Quantity</th>
                    <th style="width: 40px;">Low Stock Quantity</th>
                </thead>
		`;

		for (const { Current_Quantity, Name, Low_Stock_Quantity } of items) {
			message +=
				'<tr>' +
				'<td>' +
				Name +
				'</td>' +
				'<td>' +
				Current_Quantity +
				'</td>' +
				'<td>' +
				Low_Stock_Quantity +
				'</td>' +
				'</tr>';
		}
		message += '</table>';

		mailOptions = {
			from: this.from,
			to,
			subject: `Low Stock Alert`,
			html: message,
		};

		this.transport.sendMail(mailOptions);
	}
}

module.exports = EmailSender;
