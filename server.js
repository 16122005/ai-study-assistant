import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize Google Gen AI SDK
// (You can replace process.env.GEMINI_API_KEY with your direct key string if needed)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/study-chat', async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        // Call the real Gemini model to handle ANY question dynamically
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: "You are a helpful, intelligent AI Study Assistant and general chatbot. Answer any question the user asks accurately, clearly, and concisely.",
            }
        });

        const reply = response.text || "I couldn't generate a response. Please try again.";

        res.json({
            success: true,
            query: message,
            response: reply,
            timestamp: new Date().toLocaleTimeString()
        });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ 
            success: false, 
            response: "Oops! Something went wrong connecting to the AI model. Please check your API key." 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Real AI Chatbot Server running on http://localhost:${PORT}`);
});