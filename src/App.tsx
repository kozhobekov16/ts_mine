import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import './App.css';
import {TodoType} from "./types";

function App() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<TodoType[]>([])

    const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    const handleToggle = (id: number) => {
        setTodos(todos.map(item => {
                if (item.id !== id) {
                    return item
                }
                return {
                    ...item,
                    complated: !item.complated
                }
            })
        )
    }

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: text,
            complated: false
        }])
        setText('')
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
    }

    return (
        <div className="App">
            <div className="add">
                <input value={text} onChange={inputChange}/>
                <button onClick={addTodo}>+</button>
            </div>
            <TodoList data={todos} removeTodo={removeTodo} handleToggle={handleToggle}/>
        </div>
    );
}

export default App;
