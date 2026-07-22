```markdown
# 🚀 AI Study Assistant App

An advanced, full-stack AI study assistant designed to help students master academic concepts, solve complex problems, organize their study sessions, and review material efficiently.

## ✨ Features

* **🤖 Multimodal AI Chat:** Ask complex questions or upload images, notes, and code screenshots for instant AI analysis.
* **⚡ Interactive Flashcards:** Automatically generates smart study flashcards from any AI explanation with a click to flip through concepts.
* **🍅 Built-in Pomodoro Timer:** Keep track of study focus blocks with a fully integrated countdown timer and session streak counter.
* **💬 Chat Session History:** Automatically saves and manages multiple chat histories locally using `localStorage`.
* **🔊 Text-to-Speech & Clipboard:** Read answers aloud or copy study notes instantly.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS, JavaScript, FontAwesome
* **Backend:** Node.js, Express.js
* **AI Integration:** Google Gemini API (`@google/genai`)

## ⚙️ Local Installation & Setup

Open a new terminal and run the following commands:

```bash
git clone [https://github.com/16122005/ai-study-assistant.git](https://github.com/16122005/ai-study-assistant.git)
cd ai-study-assistant
npm install

```

Configure Environment Variables:
Create a `.env` file in the root directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here

```

Run the server:

```bash
node server.js

```

Open your browser and navigate to:

```url
http://localhost:5000

```

## 🚀 Deployment

### Platform: Vercel

* **Root Directory:** `./`
* **Build Command:** *(Leave default or empty)*
* **Start Command:**

```bash
node server.js

```

### Environment Variables:

* `GEMINI_API_KEY` = *your_actual_gemini_api_key*

## Live URL

https://ai-study-assistant-alpha-two.vercel.app

```

```