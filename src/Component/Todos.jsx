import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const todos = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [editValue, setEditValue] = useState(true);
  const[uniqueId,setUniqueId]=useState(null)
  const [tododate,setTodoDate]=useState("")
  const [todotime,setTodoTime]=useState("")


  // Add function
  const handleAdd = () => {
    if (input && editValue) {
      const allInputData={id: uuidv4(),name:input ,date:tododate,time:todotime}
      setItem([...item, allInputData]);
      setInput("");
      setTodoDate("")
      setTodoTime("")
    }
    else if(input && !editValue){
     setItem(
      item.map((elem)=>{
        if(elem.id===uniqueId){
         return {...elem,name:input ,date:tododate,time:todotime}
        }
        return elem

      })
     )
     setInput("")
     setTodoDate("")
      setTodoTime("")
     setEditValue(true)
    }
   
     else {
      alert("enter something");
    }
  };

  // delete each item function
  const handleDelete = (elem) => {

    const updatedItems = item.filter((element) => {
      return element.id != elem.id;
    });
    setItem(updatedItems);
  };

  // remove all function
  const handleRemoveAll = () => {
    setItem([]);
  };

  // handleEdit function
  const handleEdit = (elem) => {
    setEditValue(false)
    setInput(elem.name)
    setTodoDate(elem.tododate)
    setTodoTime(elem.todotime)
    setUniqueId(elem.id)
  };
  return (
    <>
      <div className="main1">
        <h1>To_Do_List</h1>
        <div className="chlid1">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your text here"
          />
    <input value={tododate} onChange={(e)=>{setTodoDate(e.target.value)}} type="date" placeholder="Enter date" />
    <input value={todotime} onChange={(e)=>{setTodoTime(e.target.value)}} type="Time" placeholder="Enter Time" />
          {
            editValue?  <button className="btn-primary addbtn" onClick={handleAdd}>Add </button>:<button className="btn addbtn" onClick={handleAdd}>Update</button>
          }
        
        </div>
        <div className="showItems lists">
          {item.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <div className="h2"><span id="elemname">{elem.name}</span> <span>{elem.date} {elem.time}</span></div>
                <button
                  className="btn addbtn"
                  onClick={() => handleDelete(elem)}
                >
                  Delete
                </button>

                <button className="btn addbtn" onClick={()=>handleEdit(elem)}>Edit</button>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button onClick={handleRemoveAll}>Remove all</button>
        </div>
      </div>
    </>
  );
};

export default todos;
