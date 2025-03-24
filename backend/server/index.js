const express = require('express');
const { GenerativeModel, GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// API endpoint to get location and choices
app.post('/api/adventure', async (req, res) => {
    const { location } = req.body;

    try {
        // Generate location description
        const descPrompt = `Generate a vivid 2-3 sentence description of ${location} in a fantasy world.`;
        const descResult = await model.generateContent(descPrompt);
        const description = descResult.response.text();

        // Generate choices
        const choicePrompt = `Provide 3 short, numbered choices (e.g., '1. Head north') for what to do next in ${location} in a fantasy world.`;
        const choiceResult = await model.generateContent(choicePrompt);
        const choices = choiceResult.response.text().split('\n');

        res.json({ description, choices });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));