import React from "react";
import { connect } from "react-redux";
import { toggleCompleted } from "../actions";
import "./Components.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleCompleted = e => {
    e.preventDefault();
    this.props.toggleCompleted(this.props.index);
  };
  render() {
    return <div onClick={this.toggleCompleted}>{this.props.todo.task}</div>;
  }
}

export default connect(
  null,
  { toggleCompleted }
)(TodoItem);
