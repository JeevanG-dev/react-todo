import css from "./Error.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function Error(){

    const {todoItems} = useContext(TodoItemsContext);



    return <>{todoItems.length === 0 && <h2 className= {css.errorMessage}>Enjoy Your Date. You have completed your task.</h2>}</>
}

export default Error; 