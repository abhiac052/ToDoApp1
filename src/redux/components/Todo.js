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
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-3 mx-auto text-black shadow-lg p-3">
            <h3>Todo App</h3>
            <br />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add your new todo"
                aria-describedby="button-addon2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="btn btn-warning px-3 fw-bold"
                type="button"
                id="button-addon2"
                onClick={() => dispatch(addTodo(input), setInput(""))}
              >
                +
              </button>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5" id="names">
                  {list.map((comp) => {
                    return (
                      <div className="input-group mb-3" key={comp.id}>
                        <h4>{comp.data}</h4>
                        <button
                          className="btn btn-danger"
                          type="button"
                          id="button-addon1"
                          title="Delete"
                          onClick={() => dispatch(deleteTodo(comp.id))}
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <button className = "btn btn-danger" id="btn2" type="button" title="Removeall" onClick={()=>dispatch(removeTodo())}>Delete All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
