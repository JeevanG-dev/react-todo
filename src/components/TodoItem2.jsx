function TodoItem2(){

let todoName = 'Go to uni'
let todoDate = '04/10/2023'
    return <div class="container items">
        <div class="row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2"><button class="btn btn-danger">Delete</button></div>
  </div>
    </div>
    
    
}

export default TodoItem2;