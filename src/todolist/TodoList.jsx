import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 0,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 0,
      text: "Learn JS",
      isCompleted: true,
    },
    {
      id: 0,
      text: "Learn ReactJS",
      isCompleted: false,
    },
  ];
  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
