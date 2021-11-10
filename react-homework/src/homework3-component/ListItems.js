import React, { Component } from "react";


class ListItems extends React.Component {
    
    render() {
        
        return (
            <ul className="todos">
                {
                    this.props.todos.map(todo => {
                        return ( <li key = {todo.key}> 
                                    <input type = "text" id = {todo.key} value = {todo.text} onChange = {(event) => { this.props.updateTodo(event.target.value, todo.key) }} />
                    
                                    <div className ="btn-group">
                                        <button onClick = { () => {this.props.deleteTodo(todo.key)}}>Delete</button>
                                        <button onClick={() => {this.props.isCompleted(todo.completed, todo.key)}}> 
                                            {todo.completed? "Withdraw" : "Completed"}
                                        </button>
                                    </div>
                    
                                </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default ListItems;