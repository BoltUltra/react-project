import TodoItem from "./TodoItem";

const TodoList = () => {
  const date = new Date();
  let hours = date.getHours() % 24;
  let minutes = date.getMinutes();
  let timeOfDay;

  //For the timing
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //for the time of the day
  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }

  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />

      <h1>
        It is currently about {hours}:{minutes} o'clock in Nigeria! Good{" "}
        {timeOfDay}
      </h1>
    </div>
  );
};

export default TodoList;
