import { useState } from 'react'
import './App.css'

function App() {
  let [toDoList, setToDoList] = useState([]);
  
  let saveToDoList = (e) => {
    e.preventDefault();
    let toName = e.target.toName.value;
    
    if(toDoList.includes(toName)){
      alert("This task is already in the list");
      return;
    }
    setToDoList([...toDoList, toName]);
    input.value = "";
    alert("Task added");
    
  }
  let list = toDoList.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNumber={index} 
        toDoList={toDoList} setToDoList={setToDoList}
      />
    )
}
)
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form action="" onSubmit={saveToDoList}>
        <input type="text" name='toName'/> 
        <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
      
    </div>
  )
}

export default App;

function ToDoListItems({value,indexNumber,toDoList,setToDoList}){

  let deleteRow = () => {
    let newList = toDoList.filter((item, index) => index !== indexNumber);
    setToDoList(newList);
    alert("Task deleted");
  }
  return (
    <li >{indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}

