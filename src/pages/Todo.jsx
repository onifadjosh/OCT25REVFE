import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, storeTodo } from "../redux/appSlice";
import { Link } from "react-router-dom";

const Todo = () => {
  let todo = useSelector((state) => state.todo);
  let dispatch = useDispatch()
  const [todoItem, setTodoItem] = useState("");
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setTodoItem(e.target.value)} />

        <button className="btn btn-success" onClick={()=>dispatch(storeTodo(todoItem))}>submit</button>
      </div>

      {todo.length > 0 ? (
        todo.map((todoItem, index) => (
          <div key={index}>
           <Link to={`/blog/${todoItem}`}> {index + 1}. {todoItem} <button className="btn btn-danger" onClick={()=>dispatch(deleteTodo(todoItem))}>delete</button></Link>
          </div>
        ))
      ) : (
        <div>No item to see here</div>
      )}
    </div>
  );
};

export default Todo;
