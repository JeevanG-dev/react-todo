import {useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({onNewItem}){

    const todoNameElement = useRef()
    const todoDateElement = useRef()


    function handleAddButton(event){
event.preventDefault();

const todoName = todoNameElement.current.value;
const dueDate = todoDateElement.current.value;
todoNameElement.current.value = "";
todoDateElement.current.value = "";
onNewItem(todoName,dueDate)


    }


return  <div className="container text-center">
    <form action="" className="row" onSubmit={handleAddButton}>



<div className="col-6">
    <input type="text"
     placeholder="Enter todo here"
    ref={todoNameElement}
    
      />
      </div>
<div className="col-4">
    <input type="date" 
  ref={todoDateElement}
  
    />
    </div>
<div className="col-2">
    <button 
    
    className="btn btn-primary"
     
     >
        <IoIosAddCircle />
     </button></div>
   
</form>

</div>


}

export default AddTodo;