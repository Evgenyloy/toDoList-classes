const Date = ({ currentMonth, currentDay }) => {
  return (
    <div className="todo__date">
      <div className="todo__date-cont">
        <div className="todo__date-month">{currentMonth}</div>
        <div className="todo__date-day">{currentDay}</div>
      </div>
      <div className="todo__title">Today</div>
    </div>
  )
}

export default Date
