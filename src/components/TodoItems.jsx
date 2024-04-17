import TodoItem from "./TodoItem";

import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItems () {



const {todoItems} = useContext(TodoItemsContext);



    return <>
    <div className="item-Container">
      {todoItems.map((item)=>(<TodoItem 
      key={item.name} todoDate={item.dueDate} todoName={item.name} ></TodoItem>))}
        
      </div>
    
    </>
}

export default TodoItems;

