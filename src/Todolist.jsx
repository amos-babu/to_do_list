import React, { useState } from 'react';

const Todolist = ({ messages, setMessages }) => {
  const [isChecked, setIsChecked] = useState(Array(messages.length).fill(false));

  const handleCheckBox = (index) => {
    setIsChecked((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[index] = !updatedChecked[index];
      return updatedChecked;
    });
  };

  const deleteTask = (index) => {
    const updatedTask = messages.filter((_, i) => i !== index);
    setMessages(updatedTask);
    localStorage.setItem('messages', JSON.stringify(updatedTask));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTask = messages.map((message, i) => 
      i === index ? {...message, completed: !message.completed } : message
    );
    setMessages(updatedTask);
    localStorage.setItem('messages', JSON.stringify(updatedTask));
    console.log(updatedTask);
  };

  return (
    <>
      {messages.map((message, index) => (
        <div className="form-check mt-3" key={index}>
          <input
            onChange={() => toggleTaskCompletion(index)}
            checked={message.completed}
            className="form-check-input"
            type="checkbox"
            id={`addNewTask${index}`}
          />
          <label
            style={{ textDecoration: isChecked[index] ? 'line-through' : 'none' }}
            className="form-check-label"
            htmlFor={`addNewTask${index}`}
             >
            {message}
          </label>
          <button 
            type='button' 
            className='btn btn-danger float-end'
            onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
