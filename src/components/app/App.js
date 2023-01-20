import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Date from '../date/Date';
import ToDoList from '../toDoList/ToDoList';
import ToDoForm from '../toDoForm/ToDoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  onAddTask = (task) => {
    if (!task) return;

    const newTask = {
      id: uuidv4(),
      task,
      done: false,
    };
    this.setState(({ tasks }) => {
      const newArr = [...tasks, newTask];
      return { tasks: newArr };
    });
  };

  onDone = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    }));
  };

  onDelete = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter((item) => item.id !== id),
      };
    });
  };

  onClearAll = () => {
    if (this.state.tasks.length === 0) return;
    this.setState({ tasks: [] });
  };

  render() {
    return (
      <div className="container">
        <div className="todo">
          <Date />
          <ToDoList
            tasks={this.state.tasks}
            onDone={this.onDone}
            onDelete={this.onDelete}
          />
          <ToDoForm onAddTask={this.onAddTask} onClearAll={this.onClearAll} />
        </div>
      </div>
    );
  }
}

export default App;
