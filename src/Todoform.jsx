import React, { useEffect, useState } from 'react'
import Todolist from './Todolist';

const Todoform = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

   useEffect(()=>{
    const storedMessage = localStorage.getItem('messages');
    if(storedMessage){
      setMessages(JSON.parse(storedMessage));
    }
   }, [])

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if(newMessage.trim() !== ''){
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage.trim()];
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
      setNewMessage('');
    } 
  };

  const handleKeydown = (e) => {
    if(e.key === 'Enter'){
      handleAddMessage();
    }
  }

  return (
    <>
         <input className="form-control mt-3" type="text" placeholder="Add New"
            onChange={handleMessageChange} 
            onKeyDown={handleKeydown}
            value={newMessage}
         />

          <button className='btn btn-primary mt-3' type='button' 
            onClick={ handleAddMessage }>Add New
          </button>

          <Todolist messages={ messages } setMessages= { setMessages }/>
    </>
  )
}

export default Todoform