import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function TodoItem ({todoName,todoDate}){
    
  const {DeleteItem} = useContext(TodoItemsContext);

        return  <div className="container text-container mt-2 ">
            <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=> DeleteItem(todoName)}><RiDeleteBin5Line /></button></div>
      </div>
        </div>
        
    }
    
    export default TodoItem;