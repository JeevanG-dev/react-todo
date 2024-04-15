function TodoItem ({todoName,todoDate,nextOnDeleteClick}){
    
        return  <div className="container text-container mt-2 ">
            <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=> nextOnDeleteClick(todoName)}>Delete</button></div>
      </div>
        </div>
        
    }
    
    export default TodoItem;