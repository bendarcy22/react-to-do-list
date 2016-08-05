import React from 'react';

const Task = props => {
  return (
    <div>
      <li>{props.name}</li>
      <button className="button" type="button" onClick={props.completeTaskButton}>Complete</button>
    </div>
  );
};

export default Task;
