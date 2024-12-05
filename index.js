const express = require('express');
const basicAuth = require('basic-auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Secret route with Basic Auth
app.get('/secret', (req, res) => {
    const user = basicAuth(req);

    if (!user || user.name !== process.env.USERNAME || user.pass !== process.env.PASSWORD) {
	res.set('WWW-Authenticate', 'Basic realm="Access to the secret route"');
        res.status(401).send('Unauthorized');
        return;
    }

    res.send(process.env.SECRET_MESSAGE);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
