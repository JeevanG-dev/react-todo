import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Error from "./components/ErrorMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  function handleNewItem(itemName, itemDate) {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDate },
    ]);
  }

  function handleDeleteItem(todoItemName) {
    const newItem = todoItems.filter((item) => item.name !== todoItemName);

    setTodoItems(newItem);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <Error errormessage={todoItems}></Error>
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
