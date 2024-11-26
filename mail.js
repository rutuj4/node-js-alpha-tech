var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    // serivce: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'rutujshah4040@gmail.com',
        pass: 'tefq hjbf bkvh xnni'
    }
});

var mailOptions = {
    from: 'rutujshah4040@gmail.com',
    to: 'nk8709468562@gmail.com',
    subject: 'Email sending using Node.js',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hey there</title>
    </head>
    <body>
        <h1>Hello,</h1>
        <p>How are you?</p>
    </body>
    </html>
    `
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } 
    else {
        console.log('Email send: ' + info.response);
    }
});