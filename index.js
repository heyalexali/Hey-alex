const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', (req, res) => {
    const message = req.body.message || '';

    if (message.toLowerCase() === 'hey alex') {
        res.json({ reply: 'Amin Sir, kya kaam hai? 🤖' });
    } else {
        res.json({ reply: `Aapne bola: "${message}"` });
    }
});

app.get('/', (req, res) => {
    res.send('Hey Alex backend is running!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});