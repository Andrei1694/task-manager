const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendMail() {
    const msg = {
        to: 'andrei4.stanciu@gmail.com', // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    try {
        const mail = await sgMail.send(msg)
    } catch (error) {

    }
}

module.exports = {
    sendMail
}