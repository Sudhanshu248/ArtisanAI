export const chatbotResponse = (req, res) => {
  try {
    const { message } = req.body
    if (!message) return res.status(400).json({ reply: "⚠️ Please enter a message." });

    const msg = message.toLowerCase(); // Normalize

    // Default reply
    let reply = "🤖 Sorry, I don't understand that yet.";

    // Keyword-based responses
    if (msg.includes("hello") || msg.includes("hi")) {
      reply = "Hi there! 👋 How can I help you?";
    } else if (msg.includes("how are you")) {
      reply = "I'm doing great 😄";
    } else if (msg.includes("what you can do")) {
      reply = "I can chat with you, answer simple questions, and guide you on AI tasks!";
    } else if (msg.includes("image") || msg.includes("generate")) {
      reply = "I can guide you on generating images using AI tools!. You can enhance images by uploading them in the Image Enhancer section.";
    } else if (msg.includes("help")) {
      reply = "You can ask me things like how to generate AI posters, enhance images and generate AI videos.";
    } else if (msg.includes("bye") || msg.includes("goodbye")) {
      reply = "Goodbye! Have a nice day 👋";
    }

    return res.json({ reply });

  } catch (error) {
    console.error("Chatbot Error:", error.message);
    return res.status(500).json({ reply: "⚠️ Something went wrong!" });
  }
};