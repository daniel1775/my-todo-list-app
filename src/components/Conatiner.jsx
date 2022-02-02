import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

import "../App.css";

const Container = () => {
   const [list, setList] = useState([]);
   const handleAddItem = addItem => {
      console.log(...list);
      setList([...list, addItem]);
   }

   return(
      <div className="container">
         <FormTodo className="formTodo" handleAddItem={handleAddItem}></FormTodo>
         <TaskList className="taskList" list={list} setList={setList}></TaskList>
      </div>
   )
}

export default Container;