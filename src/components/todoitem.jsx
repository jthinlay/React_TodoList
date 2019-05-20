import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      //<div style={{ backgroundColor: "#f4f4f4" }}> inline style
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.onDelete.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "3px 7px",
  borderRadius: "30%",
  cursor: "pointer",
  float: "right"
};
// const itemStyle = {
//   backgroundColor: "#f4f4f4",
// };
export default TodoItem;
