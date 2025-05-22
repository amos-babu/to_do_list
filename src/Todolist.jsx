import React, { useState } from 'react';

const Todolist = ({ messages, setMessages }) => {
  // State to track the completion status of each task
  const [completedTasks, setCompletedTasks] = useState(Array(messages.length).fill(false));

  const toggleTaskCompletion = (index) => {
    const updatedCompletedTasks = completedTasks.map((completed, i) =>
      i === index ? !completed : completed
    );
    setCompletedTasks(updatedCompletedTasks);
  };

  const deleteTask = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));

    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <>
      {messages.map((message, index) => (
        <div className="form-check mt-3" key={index}>
          <input
            onChange={() => toggleTaskCompletion(index)}
            checked={completedTasks[index]}
            className="form-check-input"
            type="checkbox"
            id={`addNewTask${index}`}
          />
          <label
            style={{ textDecoration: completedTasks[index] ? 'line-through' : 'none' }}
            className="form-check-label"
            htmlFor={`addNewTask${index}`}
          >
            {message}
          </label>
          <button
            type="button"
            className="btn btn-danger float-end"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
