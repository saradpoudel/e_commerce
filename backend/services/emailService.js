const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendRegisterEmail(newClient) {
    const msg = {
        from: 'mrsaradpoudel@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        template_id: 'd-eeeba92c63984f058013e943c9e18ea4',
        personalizations: [
            {
                to: {
                    email: newClient.email
                },
                dynamic_template_data: {
                    firstName: newClient.firstName,
                    dashboardUrl: 'http://localhost:3000'
                }
            }
        ]
    }
    try {
        await sgMail.send(msg);
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = { sendRegisterEmail }
