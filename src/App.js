import React, { Component } from 'react';
import Todo from "./components/Todo"; 
import AddTodo from "./components/AddTodo"; 
import Bar from "./components/Bar";


class App extends Component {
  state = { 
    todos:[
      {id:1, title: 'Get up early'},
      {id:2, title: 'Eat breakfast'},
      {id:3, title: 'Do programming well'},
    ], 
    todoLimit : 5, 
   }

   handleAddTodo = (todo) => {
     todo.id = Math.random(); 
     const todos = [...this.state.todos, todo];
     
     this.setState({
      todos, 
     })
   }

   handleDelete = (id) => {
      const todos = this.state.todos.filter(todo=> todo.id !== id ); 

      this.setState({
        todos, 
      })
   }

  render() { 
    const { todos, todoLimit } = this.state; 
    return ( 
      <React.Fragment>
          <div className="container">
          <h3 className="text-center mt-4 mb-5">Todos!</h3>
            <div className="row">
                <div className="col-8">
                    <Todo 
                      deleteTodo={this.handleDelete} 
                      todo={todos} />
                    <Bar 
                      todo={todos} 
                      todoLimit={todoLimit} /> 
                </div>

                <div className="col-4">
                    <AddTodo 
                      addTodo={this.handleAddTodo} 
                      todoLimit={todoLimit}
                      todo={todos} 
                    />
                </div>
            </div>
          </div>
      </React.Fragment>
     );
  }
}
 
export default App;