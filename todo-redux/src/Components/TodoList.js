import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = props => {
  return props.todoList.map(todo => {
    return (
      <div>
        <TodoItem task={todo.task} />
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
  {}
)(TodoList);
