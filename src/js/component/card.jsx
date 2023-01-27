import React, { useState } from "react";

//create your first component
const Card = () => {
  let dummyList = [];

  dummyList = [
    'Make my bed',
    'Wash my hands',
    'Watch El Padrino',
    'Zippydi Do Dah'
  ];

  const [items, setItems] = useState(dummyList);
  const [value, setValue] = useState('');
  return (
    <div className="component-card">
      <div className="main-card text-secondary">
        <div className="card-row input-section">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="text-secondary"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && value && value !== '') {
                setItems([...items, value]);
                setValue('');
              }
            }}
          />
        </div>
        {items.map((item, i) => (
          <div className="card-row input-section" key={`${i}-card-row`}>
            {item}
            <button
              className="close-button text-secondary"
              onClick={() => {
                let myArray = [...items]
                myArray.splice(i, 1)
                setItems(myArray);
              }}
            >
              X
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <div className="card-row input-section">
            No tasks, add a task
          </div>
        )}
        <div className="footer">
          <small>{items.length} items left</small>
        </div>
      </div>
      <div className="extra-card extra-1" />
      <div className="extra-card extra-2" />
    </div>
  );
};

export default Card;