import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,setTodos,filter}) => {
  return (
    <div className='todo-container'>
    <ul className="todo-list">
    {
      filter.map((todo)=>{
        return (
          
          <Todo setTodos={setTodos} todos ={todos} key={todo.id} text={todo.text} id={todo.id} isCompleted={todo.isCompleted}/>
        )
      })
    }
      
    </ul>

    </div>
  )
}

export default TodoList;