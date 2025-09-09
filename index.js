const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Schema
const MessageSchema = new mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);

// Routes
app.post('/api/message', async (req, res) => {
    const message = req.body.message || '';

    // Save message in DB
    const newMsg = new Message({ text: message });
    await newMsg.save();

    if (message.toLowerCase() === 'hey alex') {
        res.json({ reply: 'Amin Sir, kya kaam hai? 🤖' });
    } else {
        res.json({ reply: `Aapne bola: "${message}"` });
    }
});

app.get('/', (req, res) => {
    res.send('Hey Alex backend is running with MongoDB!');
});

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
