import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import './App.css';
import {TodoType} from "./types";
import {Button, Input} from "@mui/material";

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

    const handleKeyEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
    }

    return (
        <div className="App">
            <div className="add">
                <Input
                    defaultValue="Hello world"
                    value={text}
                    onChange={inputChange}
                    placeholder="Type something"
                    onKeyPress={handleKeyEnter}
                />
                <Button variant="contained" onClick={addTodo}>+</Button>
            </div>
            <TodoList
                data={todos}
                removeTodo={removeTodo}
                handleToggle={handleToggle}/>
        </div>
    );
}

export default App;
