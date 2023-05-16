import React, { useState } from 'react';
import './App.css';

export default function App() {
  // List and Ternary operator
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];

  // useState example

  const [inputText, ChangeInput] = useState('');
  const handleInputText = (event) => {
    console.log(event.target.value);
    ChangeInput(event.target.value);
  };

  // show and hide

  const [showText, showTextfunc] = useState(true);
  const hide = () => {
    showTextfunc(!showText);
  };

  //change color

  const [setcolor, changecolorfunc] = useState('white');

  //counter App

  const [count, changecount] = useState(0);

  const increment = () => {
    changecount(count + 1);
  };
  const decrement = () => {
    changecount(count - 1);
  };
  const reset = () => {
    changecount(0);
  };

  //toDO List

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const onChangeText = (event) => {
    console.log(event.target.value);
    setNewTask(event.target.value);
    console.log(newTask);
  };
  const addtask = () => {
    const newListArray = [...todoList, newTask];
    setTodoList(newListArray);
  };
  //delete task
  const delText = (taskname) => {
    setTodoList(todoList.filter((task) => task !== taskname));
  };

  return (
    <div>
      {planets.map((planet, key) => {
        // console.log(planet.name);
        return <User name={planet.name} keys={planet.isGasPlanet} />;
      })}
      <input onChange={handleInputText}></input>
      <h1>{inputText}</h1>
      <button onClick={hide}>Show/Hide</button>
      {showText && <h1 style={{ color: setcolor }}>My name is Harivikash</h1>}

      <button
        onClick={() => {
          changecolorfunc(setcolor == 'white' ? 'green' : 'white');
        }}
      >
        Change color
      </button>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      <hr />
      <hr />
      <div className="todoinput">
        <input onChange={onChangeText}></input>
        <button onClick={addtask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task) => {
          return (
            <h1>
              {task}
              <button onClick={() => delText(task)}>X</button>
            </h1>
          );
        })}
      </div>
    </div>
  );
}
const User = (props) => {
  // console.log(props);
  return (
    <>
      <div>{!props.keys && <h1>{props.name}</h1>}</div>
    </>
  );
};
