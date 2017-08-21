import React, { Component } from 'react';
import Todo from '../Todo/Todo';
class TodoList extends Component {
    render() {
        
        return (
            <div>
                {
                    this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onTodoClick(todo.id) }
                    >
                    </Todo>)
                }
            </div>
        );
    }
}

export default TodoList;