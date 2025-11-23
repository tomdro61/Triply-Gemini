import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  // Ensure API key is available
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. AI features will default to mock responses.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const planTrip = async (prompt: string): Promise<string> => {
  const ai = getAiClient();
  
  if (!ai) {
    return "I can help you plan your trip! Please configure your API key to see real AI suggestions. For now, I'd suggest a trip to Kyoto, Japan for the cherry blossoms!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert travel agent for Triply. 
      The user wants to plan a trip based on this input: "${prompt}". 
      Provide a short, enthusiastic, and structured 3-point itinerary summary with estimated costs. 
      Keep it under 100 words. Format nicely with bullet points.`,
    });

    return response.text || "I couldn't generate a plan right now, please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, our AI travel agent is momentarily unavailable. Please try again later.";
  }
};