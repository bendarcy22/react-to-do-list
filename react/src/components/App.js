import React, { Component } from 'react';
import List from './List';
import TaskForm from './TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      name: ''
    };
    this.updateTask = this.updateTask.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
    this.completeTaskButton = this.completeTaskButton.bind(this);

  }

  completeTaskButton(id) {
    let newTasks = this.state.taskList.filter(task => {
      return task.id !== id;
    });
    this.setState({ taskList: newTasks })
  }

  formSubmission(e) {
    e.preventDefault();
    let newTask = {
      id: Date.now(),
      name: this.state.name
    };
    let newTasks = [...this.state.taskList, newTask];
    this.setState({
      taskList: newTasks,
      name: ''
    });
  }

  updateTask(e){
    this.setState({name: e.target.value})
  }

  render(){
    return (
      <div>
        <h1 className="text-center">React To-Do List</h1>
        <TaskForm
        formSubmission={this.formSubmission}
          updateTask={this.updateTask}
          name={this.state.name}
        />
        <List
          taskList={this.state.taskList}
          completeTaskButton={this.completeTaskButton}
        />
      </div>
    );
  }
}

export default App;
