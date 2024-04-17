import { createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext = createContext({
    todoItems:[],
    NewItem: ()=>{},
    DeleteItem:()=>{},
});


function todoItemsReducer(currentTodoItems, action) {
    let newTodoItems = currentTodoItems;
  
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currentTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currentTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    }
  
    return newTodoItems;
  }

const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function NewItem(itemName, itemDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
    /*setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDate },
    ]);*/
  }

  function DeleteItem(todoItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
    // const newItem = todoItems.filter((item) => item.name !== todoItemName);

    // setTodoItems(newItem);
  }
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        NewItem,
        DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
