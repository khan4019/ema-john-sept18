import React, { Component } from 'react';

class Todo extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p
                 onClick={this.props.onClick}
                 style={{textDecoration: this.props.completed ? 'line-through': 'none'}}
                >{this.props.text}</p>
            </div>
        );
    }
}

export default Todo;