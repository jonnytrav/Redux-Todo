import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import { toggleCompleted } from "../actions";
import "./Components.css";

const TodoList = props => {
  console.log(props);
  return props.todoList.map((todo, i) => {
    return (
      <div className={todo.completed ? "completed" : null} key={i}>
        <TodoItem todo={todo} index={i} />
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(TodoList);
