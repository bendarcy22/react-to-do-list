import React from 'react';
import Task from './Task';

const List = props => {
  let tasks = props.taskList.map(task => {
    const { id, name } = task;
    let buttonClick = () => props.completeTaskButton(id);

    return (
      <Task
      key={id}
      name={name}
      completeTaskButton={buttonClick}
      />
    );
  });
  
  return (
    <div>
      <ul>
        {tasks}
      </ul>
    </div>
  );
};

export default List;
