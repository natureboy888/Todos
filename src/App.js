import React, { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filterItem,setFilterItem] = useState([]);

  const filteredTodos = () =>{
    switch (status){
      case "completed":
        setFilterItem(todos.filter(item => item.isCompleted === true));
        break;
      case "incompleted":
        setFilterItem(todos.filter(item => item.isCompleted === false));
        break;
      default:
        setFilterItem(todos)
    }
  }

  useEffect(() => {
    filteredTodos()
  
  }, [todos,status])


  return (
    <div className='App'>
      <header>
      <h1>Todo App</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filter={filterItem}/>
    </div>
  )
}

export default App;