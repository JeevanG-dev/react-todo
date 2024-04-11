import TodoItem from "./TodoItem";

function TodoItems ({todoItems}) {
    return <>
    <div className="item-Container">
      {todoItems.map((item)=>(<TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>))}
        
      </div>
    
    </>
}

export default TodoItems;