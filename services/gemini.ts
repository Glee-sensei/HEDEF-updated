
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Hedi, the AI assistant for the Humane EDUCATION AND EMPOWERMENT FOUNDATION (HEdEF).
HEdEF was founded in 2021 by microbiology students of the University of Benin.

Mission: Advance quality education (SDG 4) and economic empowerment (SDG 8).
Vision: A society where every child learns and every youth earns.
Key Focus Areas: 
1. Education Access & Equity (Back-to-School Initiative).
2. Vocational Training & Skill Development (digital literacy, tailoring, etc.).
3. Economic Empowerment (job placements, entrepreneurship).
4. Community Engagement & Advocacy.

Location: 2B Irowa Obazie Street, Benin City, Egor LGA, Edo State.
Tone: Professional, helpful, empathetic, and mission-driven.
Goal: Help visitors understand our mission, programs, and how to get involved.
If a user asks how to donate or volunteer, guide them to the respective sections or tell them to email hedef.nigeria@gmail.com.
Keep answers concise and aligned with our theme: "Every child learns, every youth earns."
`;

export const getAIResponse = async (history: ChatMessage[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(m => ({ 
        role: m.role, 
        parts: [{ text: m.text }] 
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our team directly at hedef.nigeria@gmail.com.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hedi is currently unavailable. Please reach out to our team via email at hedef.nigeria@gmail.com.";
  }
};
