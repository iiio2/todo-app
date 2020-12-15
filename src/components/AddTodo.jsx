import React, { Component } from 'react';
import Input from './Input';

class AddTodo extends Component {
  state = {
    title: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.todo.length === this.props.todoLimit) {
      alert('You cannot add new todo!');
      e.target.reset();
      return;
    }
    if (this.state.title.trim().length === 0) {
      return;
    }
    this.props.addTodo(this.state);

    e.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <h4>Add Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <Input name='title' onChange={this.handleChange} />
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
