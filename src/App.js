
import './App.css';
import React, {useState}from 'react';

function App() {
  const[name,setName]=useState();
  const[fullname,setfullname]=useState();
  const[password,setpassword]= useState();
  const[fullpassword,setfullpassword]= useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);

  };
  const inputEventtwo = (event) => {
    console.log(event.target.value);
    setpassword(event.target.value);

  };
  const onsubmits=(event)=>{
    event.preventDefault();
    setfullname(name);
    setfullpassword(password);

  };
  return (
    
    <>
  
    <form onSubmit={onsubmits}>
    <div>
    <h1>Hello {fullname} {fullpassword} </h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
    <br/>
    <input type="text" placeholder="Enter Password" onChange={inputEventtwo} value={password}/>
    <button type="submit">Submit Me</button>

    </div>
    </form>
    
    </>
  );
}

export default App;
