import React, { useEffect, useState } from 'react'
import Todolist from './Todolist';

const Todoform = () => {
    const [messages, setMessages] = useState(+localStorage.getItem('messages') || []);
    const [newMessage, setNewMessage] = useState('');

   useEffect(()=>{
    localStorage.setItem('messages', []);
   }, [messages])

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if(newMessage.trim() !== ''){
      setMessages([...messages, newMessage.trim()]);
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

          <Todolist messages={ messages }/>
    </>
  )
}

export default Todoform