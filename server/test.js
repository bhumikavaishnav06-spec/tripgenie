const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const models = await ai.models.list();

  for await (const model of models) {
    console.log("Name:", model.name);

    if (model.supportedActions) {
      console.log("Supported:", model.supportedActions);
    }

    console.log("------------------------");
  }
}

main().catch(console.error);