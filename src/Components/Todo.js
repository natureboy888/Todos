import React from 'react';
const Todo = ({text,todos,id,setTodos,isCompleted}) => {

    const deleteHandler = () =>{
        setTodos(todos.filter(item => item.id !== id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item)=>{
            if(item.id === id){
                return{
                    ...item,isCompleted:!isCompleted
                }
            }
            return item;
        }
        ))
    }


  return (
    <div className='todo'>
        <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>{text}</li>
        <button className="complete-btn" onClick={completeHandler}>
            <i className="fa fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
            <i className="fa fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo;