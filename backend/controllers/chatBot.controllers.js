// // controllers/chatbot.controller.js

// // Simple rule-based responses
// const responses = {
//   "hello": "Hi there! 👋 How can I help you?",
//   "hi": "Hello! How are you doing?",
//   "how are you": "I’m just code, but I’m doing great 😄",
//   "bye": "Goodbye! Have a nice day 👋",
//   "help": "I can answer simple greetings like hello, hi, bye, and help."
// };

// // Chatbot handler function
// export const chatbotResponse = (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json({ reply: "⚠️ Please enter a message." });
//     }

//     const userMsg = message.toLowerCase();
//     const reply = responses[userMsg] || "🤖 Sorry, I don’t understand that yet.";

//     return res.json({ reply });
//   } catch (error) {
//     console.error("Chatbot Error:", error.message);
//     return res.status(500).json({ reply: "⚠️ Something went wrong!" });
//   }
// };



// controllers/chatbot.controller.js

export const chatbotResponse = (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "⚠️ Please enter a message." });
    }

    const msg = message.toLowerCase(); // Normalize

    // Default reply
    let reply = "🤖 Sorry, I don’t understand that yet.";

    // Keyword-based responses
    if (msg.includes("hello") || msg.includes("hi")) {
      reply = "Hi there! 👋 How can I help you?";
    } else if (msg.includes("how are you")) {
      reply = "I’m just code, but I’m doing great 😄";
    } else if (msg.includes("what can you do")) {
      reply = "I can chat with you, answer simple questions, and guide you on AI tasks!";
    } else if (msg.includes("image") || msg.includes("generate")) {
      reply = "I can guide you on generating images using AI tools!";
    } else if (msg.includes("help")) {
      reply = "You can ask me things like hello, hi, what can you do, or how to generate images.";
    } else if (msg.includes("bye") || msg.includes("goodbye")) {
      reply = "Goodbye! Have a nice day 👋";
    }

    return res.json({ reply });
  } catch (error) {
    console.error("Chatbot Error:", error.message);
    return res.status(500).json({ reply: "⚠️ Something went wrong!" });
  }
};
