import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Error from "./components/ErrorMessage";
import TodoItemsContextProvider from "./store/todo-items-store";
import "./App.css";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <Error></Error>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
