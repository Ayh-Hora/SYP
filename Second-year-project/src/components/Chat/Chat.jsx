import { useState } from 'react';
import { FaPaperPlane, FaTimes, FaCommentMedical } from 'react-icons/fa';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to HealthHub Chat!', sender: 'system' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      }]);
      setMessage('');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaCommentMedical />}
      </button>

      {/* Chat Container */}
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>Live Chat Support</h3>
          <button onClick={() => setIsOpen(false)} className="close-btn">
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              {msg.timestamp && <span className="timestamp">{msg.timestamp}</span>}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="send-btn">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;