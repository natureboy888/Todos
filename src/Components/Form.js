import React from 'react';
const Form = ({setInputText,todos,setTodos,inputText,setStatus}) => {

  const inputHandler = (e)=>{
    setInputText(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    if(inputText.trim().length === 0){
      return;
    }
    setTodos([
      ...todos,
      {id:Math.random().toString(16).slice(2),text:inputText,isCompleted:false}
    ])
    setInputText("");
  }

  const statusHandler = (e)=>{
    setStatus(e.target.value)
  }

  return (
    <form>
        <input type="text" name="todo-item"  className='todo-input' onChange={inputHandler} value={inputText}/>
        <button className='todo-button' type="submit" onClick={submitHandler}>
        <i class="fa-solid fa-square-plus"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onClick={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;