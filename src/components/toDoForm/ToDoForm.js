import { Component } from 'react'

class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  onValueChange = (e) => {
    this.setState({ input: e.target.value })
  }
  onSubmitTask = (e) => {
    e.preventDefault()
    this.props.onAddTask(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <form
        action="#"
        className="todo__form"
        name="form"
        onSubmit={this.onSubmitTask}
      >
        <input
          type="text"
          className="todo__form-input"
          placeholder="Create New Task"
          autoFocus
          rows="1"
          value={this.state.input}
          onChange={this.onValueChange}
        ></input>
        <div className="todo__button-cont">
          <button className="todo__form-button" type="submit">
            Add task
          </button>
          <div
            className="todo__form-button clear-all"
            onClick={this.props.onClearAll}
          >
            Clear all
          </div>
        </div>
      </form>
    )
  }
}

export default ToDoForm
