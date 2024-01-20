import React, { useState } from 'react';

const Todolist = ({ messages }) => {
  const [isChecked, setIsChecked] = useState(Array(messages.length).fill(false));

  const handleCheckBox = (index) => {
    setIsChecked((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[index] = !updatedChecked[index];
      return updatedChecked;
    });
  };

  return (
    <>
      {messages.map((message, index) => (
        <div className="form-check mt-3" key={index}>
          <input
            onClick={() => handleCheckBox(index)}
            checked={isChecked[index]}
            className="form-check-input"
            type="checkbox"
            value=""
            id={`addNewTask${index}`}
          />
          <label
            style={{ textDecoration: isChecked[index] ? 'line-through' : 'none' }}
            className="form-check-label"
            htmlFor={`addNewTask${index}`}
             >
            {message}
          </label>
          <button type='button' className='btn btn-danger float-end'>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
