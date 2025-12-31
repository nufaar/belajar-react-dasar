import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo isCompleted={true} text="Learn HTML" />
      <Todo isCompleted={true} text="Learn CSS" />
      <Todo isCompleted={true} text="Learn Javascript" />
      <Todo isCompleted={false} text="Learn ReactJS" />
    </ul>
  );
}
