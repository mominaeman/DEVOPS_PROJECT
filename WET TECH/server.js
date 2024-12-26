const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.static(path.join(__dirname, 'WET TECH')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'WET TECH', 'registration.html'));
});

app.post('/register', (req, res) => {
    const { username, email, service } = req.body;
    if (username && email && service) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Success</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        background-color: #f4f4f4;
                    }
                    .success {
                        color: green;
                        font-size: 24px;
                    }
                </style>
            </head>
            <body>
                <p class="success">Registration successful! Thank you, ${username}.</p>
                <a href="/">Go Back</a>
            </body>
            </html>
        `);
    } else {
        res.status(400).send('Error: All fields are required!');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
