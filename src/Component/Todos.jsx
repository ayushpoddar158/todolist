import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const todos = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [editValue, setEditValue] = useState(true);
  const[uniqueId,setUniqueId]=useState(null)


  // Add function
  const handleAdd = () => {
    if (input && editValue) {
      const allInputData={id: uuidv4(),name:input}
      setItem([...item, allInputData]);
      setInput("");
    }
    else if(input && !editValue){
     setItem(
      item.map((elem)=>{
        if(elem.id===uniqueId){
         return {...elem,name:input}
        }
        return elem

      })
     )
     setInput("")
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
            <button className="btn addbtn">date</button>
          <button className="btn addbtn">Time</button>
          
          {
            editValue?  <button className="btn-primary addbtn" onClick={handleAdd}>Add </button>:<button className="btn addbtn" onClick={handleAdd}>Update</button>
          }
        
        </div>
        <div className="showItems lists">
          {item.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h2>{elem.name}</h2>
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
