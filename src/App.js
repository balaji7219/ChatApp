

import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { Button,Container } from 'react-bootstrap';
const App = () => {
  const [chatBoxes, setChatBoxes] = useState([]);

  const handleAddChatBox = () => {
    setChatBoxes([...chatBoxes, {}]);
  };

  const handleCloseChatBox = (index) => {
    const updatedChatBoxes = chatBoxes.filter((box, i) => i !== index);
    setChatBoxes(updatedChatBoxes);
  };

  return (
    <>
    <Container className="d-flex justify-content-center m-2">
    
      <Button  variant="success" onClick={handleAddChatBox}>
        Add Chat Box
      </Button>
      </Container>
      <div className="chat-boxes ">
        {chatBoxes.map((box, index) => (
          <ChatBox key={index} onClose={() => handleCloseChatBox(index)} />
        ))}
      </div>
    
      </>
  );
};

export default App;

