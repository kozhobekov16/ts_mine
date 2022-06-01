import React, {FC} from 'react';
import {TodoType} from "../types";
import TodoItem from "./TodoItem";

interface TypeTodo {
    data: TodoType[],
    removeTodo: (id: number) => void,
    handleToggle: (id: number) => void,
}

const TodoList: FC<TypeTodo> = ({data, removeTodo, handleToggle}) => {
    return (
        <div>
            {data.map(item => (
                <TodoItem key={item.id} handleToggle={handleToggle} removeTodo={removeTodo} {...item}/>
            ))}
        </div>
    );
};

export default TodoList;