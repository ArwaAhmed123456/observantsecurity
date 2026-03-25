import React, { useState, useEffect } from 'react';
import { getBotResponse } from './chatbotLogic';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the Observant Assistant. How can I help you today with your security needs?", isBot: true }
  ]);

  // Show speech bubble after 2 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const chatBodyRef = React.useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = { text: inputMessage, isBot: false };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage('');

    // Get "intelligent" response
    setTimeout(() => {
      const botReply = getBotResponse(userMsg.text);
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 800); // 800ms delay for natural feel
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* Speech bubble that appears above the robot */}
      {!isOpen && showBubble && (
        <div className="chatbot-bubble" onClick={() => setIsOpen(true)}>
          <span>Do you need any help? 👋</span>
          <div className="bubble-tail"></div>
        </div>
      )}

      {/* The Robot Icon — always visible in corner */}
      {!isOpen && (
        <div className="chatbot-bot-icon" onClick={() => { setIsOpen(true); setShowBubble(false); }}>
          <img src="/bot/bot_2.1.png" alt="Assistant Bot" />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <img src="/bot/bot_2.1.png" alt="Bot" className="header-bot-img" />
              <h3>Observant Assistant</h3>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="chatbot-body" ref={chatBodyRef}>
            {messages.map((msg, idx) => (
              <p key={idx} className={msg.isBot ? "bot-msg" : "user-msg"}>{msg.text}</p>
            ))}
            <div className="quick-actions">
              <button onClick={() => window.location.href='/contact'}>📋 Request a Quote</button>
              <button onClick={() => window.location.href='/services'}>🛡️ Explore Services</button>
              <button onClick={() => window.location.href='/brochure'}>📄 View Brochure</button>
            </div>
          </div>
          <form className="chatbot-footer" onSubmit={handleSendMessage}>
             <input 
              type="text" 
              placeholder="Type a message..." 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
             />
             <button type="submit" className={inputMessage.trim() ? 'active' : ''}>➤</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
