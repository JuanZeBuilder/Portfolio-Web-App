import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.list';

function App() {
  // todos is the state variable, setTodos is the function to update the state variable
  const [list, setTodos] = useState([{id: '1', name: 'Todo 2', complete: false}]);
  const todoNameRef = useRef();
  
  // useEffect is a hook that runs a function when the component renders, this only run once when the component renders due to the empty array 
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedList) setTodos(storedList);
  }, []);

  // useEffect is a hook that runs a function when the component renders, runs when the list variable changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    console.log(name);
    const newTodos = [...list, {id: uuidv4(), name: name, complete: false}];
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}];
    });
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...list]; // creates a copy of the list
    const todo = newTodos.find(todo => todo.id === id); // finds the todo with the id that was passed in
    todo.complete = !todo.complete; // changes the value of todo.complete to the opposite of what it was
    setTodos(newTodos); // updates the new list to the state variable using the setTodos function
  }

  function handleClearTodos() {
    const newTodos = list.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList list = {list} toggleTodo = {toggleTodo}/>
      <input ref = {todoNameRef} type="text" />
      <button onClick = {handleAddTodo}>Add</button>
      <button onClick ={handleClearTodos}>Clear</button>
      <div>List of task not completed: {list.filter(todo => !todo.complete).length}</div>
    </>
  )
}

export default App;
