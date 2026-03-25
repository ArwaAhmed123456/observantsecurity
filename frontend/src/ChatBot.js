import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'active' : ''}`}>
      {!isOpen && (
        <div className="chatbot-teaser" onClick={() => setIsOpen(true)}>
          <span className="teaser-text">Need any help?</span>
          <div className="chatbot-icon">
            <i className="fas fa-comment-dots"></i>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Observant Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="chatbot-body">
            <p className="bot-msg">Hello! How can we help you today with your security needs?</p>
            <div className="quick-actions">
              <button onClick={() => window.location.href='/contact'}>Request Quote</button>
              <button onClick={() => window.location.href='/services'}>Explore Services</button>
            </div>
          </div>
          <div className="chatbot-footer">
             <input type="text" placeholder="Type a message..." disabled />
             <button disabled><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
