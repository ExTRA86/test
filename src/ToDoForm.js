import React, {useState} from 'react';
import ToDo from './ToDo';
import ToDoList from './ToDoList';

export default function ToDoForm(){
    const [ userInput, setUserInput ] = useState('');
    const [ toDoList, setToDoList ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
  
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }

    

    return <div>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <button onClick={handleSubmit}>Submit</button>
    </div>

};
