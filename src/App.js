import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Team from "./components/pages/team";
import AddTodo from "./components/addTodo";
import About from "./components/pages/About";
import product from "./components/pages/product";
import contact from "./components/pages/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//import uuid from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todoo => {
        if (todoo.id === id) {
          todoo.completed = !todoo.completed;
        }
        return todoo;
      })
    });
  };

  //Delete Todo
  onDelete = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    onDelete={this.onDelete}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/product" component={product} />
            <Route path="/contact" component={contact} />
            <Route path="/team" component={Team} />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
