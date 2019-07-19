import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: ""
    };
  }
  handleChange = event => {
    // event.prevent.default(); I GUESS I DON'T HAVE TO USE THIS.. IT WAS ALSO CAUSING AN ERROR
    this.setState({ currentTask: event.target.value });
    // console.log(this.state.currentTask);
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTask(this.state.currentTask);
    this.setState({ currentTask: "" });
    console.log(this.state.currentTask);
  };

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange} value={this.state.currentTask} />
          <button onClick={this.addTodo}>Add!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TodoForm);
