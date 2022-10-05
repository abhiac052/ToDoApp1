import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.todoreducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid bg">
        <div className = "row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3">

            <div className="form-container">
            <p class="fs-3 fw-bold">Todo App</p>
              <div className="form-group">
              <div className="input-group mb-3">
              
                <input type="text" className="form-control" placeholder="Add your new todo" aria-describedby="button-addon2"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-warning px-3 fw-bold" type="button" id="button-addon2" onClick={() => dispatch(addTodo(input), setInput(""))}>
                <span class="bi bi-plus" id="btn1"></span>
                </button>
                </div>
                <div className="container-fluid">
                  <ul className="list-unstyled row m-5" id="names">
                    {list.map((comp) => {
                      return (
                        <div className="input-group mb-3" key={comp.id}>
                          <h5>{comp.data}</h5>
                          <button className="btn btn-danger" type="button" id="button-addon1" title="Delete" onClick={() => dispatch(deleteTodo(comp.id))}>
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                        );
                      })}
                  </ul>
                </div>
                <button className = "btn btn-danger" id="btn2" type="button" title="Removeall" onClick={()=>dispatch(removeTodo())}>Clear All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
