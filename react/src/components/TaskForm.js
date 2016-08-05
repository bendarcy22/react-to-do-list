import React from 'react';

const TaskForm = props => {
  return (
    <div>
    <form onSubmit={props.formSubmission}>
    <input type='text'
    placeholder='Add a task'
    value={props.name}
    onChange={props.updateTask}
    />
    <input type='submit' className='button' value='Add to List' />
    </form>
    </div>
  )
}
export default TaskForm;
