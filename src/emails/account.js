const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'mayankgouravcool1@gmail.com',
        subject: 'This is my first creation',
        text: `Welcome to the app ${name} `
    })
}

const sendCancelation = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mayankgouravcool1@gmail.com',
        subject: `kyon bhai kyon delete kar di ${name} id aapne`,
        text: 'delete nhi karni chahiye thi yrr aapko id hamko batate kya dikkat thi ham sahi karte galat kiye aap'
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelation
}