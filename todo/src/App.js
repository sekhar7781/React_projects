import { useState } from 'react'
import './App.css'

function App(){
  let [todoInput,updateInput] =useState("")
 let [todoList,updateTodo] =useState(
    [{
      id:1,
      task:'Learn React'
    },
    {
      id:2,
      task:'Learn Angular'
    },
    
  ]
  )

  let next = 3
  function addNewTodo(){
   if(todoInput ===''){
    alert('Please enter a todo!')
   }
   else{

   let newTodos =[
      ...todoList,
      {
        id:next++,
        task:todoInput  
      }
    ]
    updateTodo(newTodos);
    updateInput("")
     
   }
  }

function deleteTodo(id){
 let filteredTodos= todoList.filter(
    (todo)=>{
      return todo.id !==id
    }
  )
  updateTodo(filteredTodos)
}

  return(
    <div className="container mt-5 w-50">
      <h3 className='text-center'>Todo app using react</h3>
      <div className="input-group">
        <input className="form-control" onChange={(e)=>{
          let task = e.target.value;
          updateInput(task)
        }} type="text"  value={todoInput}/>
        <button onClick={()=>{
          addNewTodo();
        }} className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-4">
        {
          todoList.map(
            (todo)=>{
              return(
                <li key={todo.id} className="list-group-item">
                  <p>{todo.task}</p>
                  <button onClick={()=>{
                    deleteTodo(todo.id)
                  }} className="btn">❌</button></li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}

export default App