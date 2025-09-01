import React, { useState } from 'react';

const ChatbotAI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Icon Button */}
      {/* <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4A90E2', // Customize color
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
        aria-label="Toggle Chatbot"
        title="Chat with ArtisanAI"
      >
        {/* You can replace this SVG with your own AI icon */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
        >
          <path d="M12 2C6.48 2 2 5.58 2 10c0 2.5 1.5 4.7 4 6v4l4-2 4 2v-4c2.5-1.3 4-3.5 4-6 0-4.42-4.48-8-10-8z" />
        </svg>
      </button> */} 
<button
  onClick={toggleChat}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#4A90E2',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  }}
  aria-label="Toggle Chatbot"
  title="Chat with ArtisanAI"
>
  {/* New robot icon SVG */}
<img
  src="./public/image/chatBot.png"
  alt="Chatbot Icon"
  style={{ width: '70px', height: '70px' }}
/>
</button>
      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '320px',
            height: '400px',
            backgroundColor: 'white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: '12px',
              backgroundColor: '#4A90E2',
              color: 'white',
              fontWeight: 'bold',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
            }}
          >
            ArtisanAI Chat
            <button
              onClick={toggleChat}
              style={{
                float: 'right',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              aria-label="Close Chatbot"
            >
              &times;
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: '12px',
              overflowY: 'auto',
              fontSize: '14px',
              color: '#333',
            }}
          >
            {/* Chat content goes here */}
            <p>Hi! How can I assist you today?</p>
          </div>
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid #ddd',
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Handle sending message
                  alert(`You typed: ${e.target.value}`);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotAI;