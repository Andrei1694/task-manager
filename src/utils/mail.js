const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendMail(mail) {
    if (!mail) throw new Error('Error, not mail was provided')
    const msg = {
        to: mail, // Change to your recipient
        from: 'andrei4.stanciu@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    try {
        const mail = await sgMail.send(msg)
        if (mail) console.log('Mail was sent')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendMail
}