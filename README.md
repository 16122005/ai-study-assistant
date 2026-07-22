```markdown
# AI Study Assistant

An all-in-one AI-powered study companion designed to help students organize their learning, manage study sessions efficiently, and understand complex technical notes.

---

## Live Demo

* **Live Application:** [https://ai-study-assistant-alpha-two.vercel.app](https://ai-study-assistant-alpha-two.vercel.app)

---

## Features

* **AI Chat Assistant:** Powered by Google Gemini to answer study-related questions, explain core concepts (Compilers, Operating Systems, Databases), and analyze uploaded notes or images.
* **Pomodoro Focus Timer:** Built-in 25-minute productivity timer to keep you focused and track completed study sessions.
* **Interactive Flashcards:** Automatically generates flashcards from AI responses or text snippets with a flip-to-reveal interface.
* **Chat Sessions Management:** Save, switch between, and manage multiple conversation histories stored locally in your browser.
* **Text-to-Speech & Copy:** Easily copy responses or have them read aloud.

---

## Tech Stack

* **Frontend:** HTML5, Tailwind CSS, JavaScript (Vanilla)
* **Backend:** Node.js, Express.js
* **AI Integration:** Google Gen AI SDK (`@google/genai`)
* **Deployment:** Vercel

---

## Project Structure

```text
ai-study-assistant/
├── public/
│   └── index.html       # Frontend interface and client-side logic
├── .env                 # Environment variables (API keys)
├── package.json         # Project dependencies and metadata
├── server.js            # Express backend server
└── vercel.json          # Vercel deployment configuration

```

---

## Setup & Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/16122005/ai-study-assistant.git](https://github.com/16122005/ai-study-assistant.git)
cd ai-study-assistant

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=5000

```


4. **Run the application locally:**
```bash
node server.js

```


Open your browser and navigate to `http://localhost:5000`.

---

## Deployment on Vercel

1. Push your repository to GitHub.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Add the environment variable `GEMINI_API_KEY` under project settings.
4. Deploy!

```

```