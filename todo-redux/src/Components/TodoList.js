import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div>
      <h1>Working!</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
