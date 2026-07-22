import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Initialize Gemini API SDK securely using environment variables
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Serve static frontend files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Study chat API endpoint supporting multimodal requests
app.post('/api/study-chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ response: "Message content is required." });
        }

        const modelResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: "You are an expert AI Study Assistant. Help students clearly explain concepts, break down complex topics (like Compilers, OS, Data Structures, OOPs), summarize notes, and provide constructive guidance. Keep formatting clean and academic."
            }
        });

        res.json({ response: modelResponse.text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ response: "Oops! Something went wrong connecting to the AI model. Please check your API key." });
    }
});

// Fallback route to serve index.html for single-page application routing on Vercel
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});