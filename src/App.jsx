import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    { name: "buy milk", dueDate: "10/03/2023" },
    { name: "Pizza", dueDate: "7/03/2023" },
    { name: "Samosa", dueDate: "20/03/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo></AddTodo>
<TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
