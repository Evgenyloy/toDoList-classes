import PropTypes from 'prop-types';
import ToDoItem from '../toDoItem/ToDoItem';

const ToDoList = ({ tasks, onDone, onDelete }) => {
  const taskElement = tasks.map((item) => {
    const { id, ...task } = item;
    return (
      <ToDoItem
        key={id}
        {...task}
        onDone={() => onDone(id)}
        onDelete={() => onDelete(id)}
      />
    );
  });

  const emptyList = <li className="todo__empty">No Tasks</li>;

  return (
    <ul className="todo__block">
      {tasks.length === 0 ? emptyList : taskElement}
    </ul>
  );
};

ToDoList.propTypes = {
  task: PropTypes.array,
  onDone: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ToDoList;
