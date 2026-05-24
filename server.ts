import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined in Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// AI Coding Tutor API Route
app.post("/api/tutor", async (req, res) => {
  try {
    const { prompt, history, currentModule, currentLesson, language } = req.body;

    if (!prompt) {
       res.status(400).json({ error: "Prompt is required" });
       return;
    }

    // Attempt to parse or construct client
    let client;
    try {
      client = getGeminiClient();
    } catch (e: any) {
       res.status(503).json({
        error: "Gemini API key is not configured.",
        message: "Please add GEMINI_API_KEY inside the 'Settings > Secrets' panel in the AI Studio UI to enable the live AI tutor.",
        isDemoResponse: true,
        text: `### 🤖 AI Tutor Hint (No API Key Installed)\n\nOops! I am currently running in a **preview sandbox** without an active Gemini API Key.\n\nTo talk to me live, please click on the **Settings > Secrets** panel in the AI Studio editor interface and select or type your \`GEMINI_API_KEY\`.\n\nIn the meantime, here is a helpful demo answer to your question about **"${prompt}"**:\n\n* **Code.org Concept**: For Class 5 coding, we use blocks such as "Repeat 5 times [ Move Forward ]" which loops an action. This is like counting numbers in a line!\n* **Telugu translation help**: Repeated actions are called regular loops (లూప్స్ / ఆవృత్తి). For example, watering plants one by one in a row!\n* **Solution Step**: Place a "Repeat" block, change the number, and snap "Move Forward" inside it.`
      });
      return;
    }

    // Build chat structure or system instructions
    const systemInstruction = `You are "AI Maastaru" (AI Teacher), a friendly, encouraging primary school coding coach for Class 5 students in Andhra Pradesh, India.
The user is a 5th-grade student or their government school teacher.
Your style should be:
1. Highly encouraging, full of warmth, calling the student "Babu" (young boy) or "Amma" (young girl/respectful) or "Smart Programmer" or "Future Innovator".
2. Explain concepts using extremely simple local analogies that a rural child in AP will instantly understand (for example, counting mangoes, loading sacks in a bullock cart, aligning slates, walking on crop pathways/paddys, Kuchipudi transition steps, or Telugu cultural events).
3. Support bilingual explanations: provide code terms in English but offer simple descriptions in Telugu (using Telugu scripts like లూప్‌ (Loop), సీక్వెన్స్ (Sequence), కండిషన్ (Condition)) so they don't feel intimidated.
4. Support the "One School - One Digital Folder" initiative of Andhra Pradesh to make digital literacy mainstream for Vikasit Bharat 2047.
5. If the question is about code.org or block programming, explain it visually matching snapping blocks, arrow directions (North, South, East, West), or Sprite Lab behaviors.
Keep answers concise, scannable, using clear headings, bullet points, and high contrast styling suitable for kids.`;

    // Process history if provided
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        });
      }
    }

    const currentContextPrompt = `Current Curriculum context:
Selected Module: ${currentModule || "Code.org Fundamentals"}
Selected Lesson: ${currentLesson || "Intro to Sprite Lab"}
Language preference: ${language || "Bilingual (Telugu & English)"}

Student/Teacher Question: "${prompt}"`;

    contents.push({
      role: "user",
      parts: [{ text: currentContextPrompt }]
    });

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("AI Tutor endpoint error:", error);
    res.status(500).json({ error: "Failed to connect to AI Tutor", details: error.message });
  }
});

// Setup Vite & Static Assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
