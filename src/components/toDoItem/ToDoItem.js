import cross from '../../resources/img/cross.svg'
import tick from '../../resources/img/tick.svg'

const ToDoItem = ({ task, onDone, done, onDelete }) => {
  let clazz
  if (done) {
    clazz = 'todo__text todo__text--done'
  }
  if (!done) {
    clazz = 'todo__text'
  }

  return (
    <li className="todo__item">
      <span className={clazz}>{task}</span>
      <div className="todo__text-btns">
        <button className="todo__done" data-action="done" onClick={onDone}>
          <img className="todo__img" src={tick} alt="done" />
        </button>
        <button
          className="todo__delite"
          data-action="delite"
          onClick={onDelete}
        >
          <img className="todo__img" src={cross} alt="delite" />
        </button>
      </div>
    </li>
  )
}

export default ToDoItem
