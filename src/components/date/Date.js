const Date = () => {
  const currentMonth = new window.Date().toLocaleString('eng', {
    month: 'short',
  });
  const currentDay = new window.Date().getDate().toLocaleString();

  return (
    <div className="todo__date">
      <div className="todo__date-cont">
        <div className="todo__date-month">{currentMonth}</div>
        <div className="todo__date-day">{currentDay}</div>
      </div>
      <div className="todo__title">Today</div>
    </div>
  );
};

export default Date;
