import React from 'react'

export default function Todo({todo, toggleTodo}:{todo: typeof Todo, toggleTodo: Function}) 
{
    function handleTodoClick() {
        console.log(todo.name)
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                {todo.name}
            </label>
        </div>
    )
}
