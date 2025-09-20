import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chatBot.css";
import { BASE_URL } from "../../../axiosConfig";

const ChatbotAI = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/chat`, 
        { message: input }
      );

      const botReply = { role: "bot", content: res.data.reply };
      setMessages((prev) => [...prev, botReply]);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: " Error: Unable to get response." },
      ]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="chatBotSection"
        aria-label="Toggle Chatbot"
        title="Chat with ArtisanAI"
      >
        <img
          src="/image/chatBot.png"
          alt="Chatbot Icon"
          style={{ width: "70px", height: "70px" }}
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="chatBotContainer"
        >
          {/* Header */}
          <div
            className="header"
          >
            ArtisanAI Chat
            <button
              onClick={toggleChat}
              className="close-btn"
              aria-label="Close Chatbot"
            >
              &times;
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="messageArea"
          >
            {messages.length === 0 ? (
              <p>Hi! How can I assist you today?</p>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: "8px",
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      backgroundColor: msg.role === "user" ? "#4A90E2" : "#f1f1f1",
                      color: msg.role === "user" ? "white" : "black",
                    }}
                  >
                    {msg.content}
                  </span>
                </div>
              ))
            )}
            {loading && <p>Bot is typing...</p>}

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div
            className="inputBox"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="inputField"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="btn"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotAI;