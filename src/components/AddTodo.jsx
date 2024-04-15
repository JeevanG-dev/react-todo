import { useState } from "react";

function AddTodo({onNewItem}){

    const [todoName,setTodoName] = useState('')
    const [dueDate,setDueDate] = useState('')

    function handleNameChange(event){
setTodoName(event.target.value)
    }

    function handleDateChange(event){
setDueDate(event.target.value)
    }

    function handleAddButton(){
onNewItem(todoName,dueDate)
setDueDate("");
setTodoName("");
    }


return  <div className="container text-center">
    <div className="row">
<div className="col-6"><input type="text" placeholder="Enter tofo here" value={todoName} onChange={handleNameChange} /></div>
<div className="col-4"><input type="date" value={dueDate} onChange={handleDateChange} /></div>
<div className="col-2"><button className="btn btn-primary" onClick={handleAddButton}>Add</button></div>
</div>
</div>


}

export default AddTodo;