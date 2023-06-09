import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'self' };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className=" d-flex justify-content-center"> 

      <div className="chat-box-header p-2">
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="chat-box-messages p-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'self' ? 'self' : 'other'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="chat-box-footer">
        <textarea
          className="message-input"
          value={message}
        
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <Button  variant="danger"className="m-1" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
    
  );
};

export default ChatBox;
