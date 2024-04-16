import TodoItem from "./TodoItem";

function TodoItems ({todoItems, onDeleteClick}) {








    return <>
    <div className="item-Container">
      {todoItems.map((item)=>(<TodoItem todoDate={item.dueDate} todoName={item.name} nextOnDeleteClick={onDeleteClick} ></TodoItem>))}
        
      </div>
    
    </>
}

export default TodoItems;

