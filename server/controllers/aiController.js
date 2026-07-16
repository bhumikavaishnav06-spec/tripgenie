const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateTrip = async (req, res) => {
  try {
    const { destination, duration, budget, travelers } = req.body;

    if (!destination || !duration || !budget || !travelers) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const prompt = `
You are an expert travel planner.

Create a ${duration}-day travel itinerary for ${destination}.

Budget: ${budget}
Travelers: ${travelers}

Include:

1. Day-wise itinerary
2. Best hotels
3. Food recommendations
4. Must visit places
5. Estimated budget
6. Travel tips

Return the response in beautiful Markdown.
`;

    const response = await ai.models.generateContent({
     model: "gemini-3.1-flash-lite",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    res.status(200).json({
      success: true,
      trip: response.text,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateTrip,
};