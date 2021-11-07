import React, { Component } from "react";
import ListItems from "./ListItems";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
            currentTodo: [
                {text: '', completed: '', key: ''},
            ]
        };
    }

    handleInputChange = (event) => {
        this.setState({
            currentTodo: {
                text: event.target.value,
                completed: false,
                key: Date.now()
            } 
        });
        
    }

    handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = this.state.currentTodo;
        if (newTodo.text === "") {
            alert("Can't be empty")
        } else {
            const newTodos = [newTodo, ...this.state.todos];
            this.setState({
                todos: newTodos,
                currentTodo: {
                    text: '',
                    completed: '', 
                    key: ''
                }
            });
        }
    }

    deleteTodo = (key) => {
        if(window.confirm('Are you sure?')) {
            this.setState({todos: this.state.todos.filter(todo => todo.key !== key)})
        }
    }

    updateTodo = (text, key) => {
        const todos = this.state.todos;
        todos.map(todo => {
            if(todo.key === key) {
                todo.text = text;
            }
        })
        this.setState({
            todos: todos
        })
    }
    isCompleted = (completed, key) => {
        const todos = this.state.todos;
        todos.map(todo => {
            if(todo.key === key) {
                todo.completed = !completed;
            }
        })
        this.setState({
            todos: todos
        })
    }
  
    render() {
        return (
            <div>
                <header className="header">  
                    <span>List</span>
                    <ul className="menu">
                        <li><a href="#">TODO</a></li>
                        <li><a href="#">About List</a></li>
                    </ul>
                </header>

                <main>
                    <div className="container">
                        <h1>Ling's Todo List</h1>

                        <form onSubmit = {this.handleAddTodo}> 
                            <div className="input-bar">
                                <input id="input1" type="text" value={this.state.todos.text} onChange= {this.handleInputChange} placeholder="Please input the new Todo"/>
                                <button type="submit">Add</button>
                            </div>
                        </form> 

                        <ListItems todos = {this.state.todos} deleteTodo = {this.deleteTodo} updateTodo = {this.updateTodo} isCompleted = {this.isCompleted}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default TodoList;
    
