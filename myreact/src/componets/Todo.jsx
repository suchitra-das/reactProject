import React, { useState } from "react";

const Todo = () => {
  const [Todo, setTodo] = useState("");
  const [arrays, setarray] = useState([]);

  const addTodo = () => {
    setarray([...arrays, Todo]);
  };


  const editHandler = () =>{
    setarray([...arrays,])

  }

 const deleteHandler = (deleteId) =>{
  setarray(arrays.filter((i, index) => index !== deleteId ))
 }

  // console.log(Todo)
  return (
    <div>
      <div className="flex gap-2">
        {/* <div>{Todo}</div> */}
        <input
          type="text"
          className="border rounded-lg p-1 "
          placeholder="here todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="border p-1 gap-2 rounded-lg" onClick={addTodo}>
          Add todo
        </button>
      </div>
      <div>
        <div>
          {arrays.map((item) => {
            return <div className="flex gap-2 p-2 " >
                
               <li key={item}>{item}</li>
               {/* <input type="checkbox"/> */}
               <button className="border px-1 py-0 rounded-lg" onClick={editHandler}>Edit</button>
                <button className="border px-1 py-0 rounded-lg" onClick={()=> deleteHandler(index)}>Delete</button>
                </div>;
          })}

        </div>
      </div>
    </div>
  );
};

export default Todo;
