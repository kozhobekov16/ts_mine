import React, {FC} from 'react';
import {TodoType} from "../types";

interface typeTodoItem extends TodoType {
    removeTodo: (id: number) => void,
    handleToggle: (id: number) => void
}

const TodoItem: FC<typeTodoItem> = (props) => {
    const {removeTodo, id, title, complated, handleToggle} = props
    return (
        <div className="todos">
            <h4 className={complated ? 'noactive' : ''}>{title}</h4>
            <button onClick={() => removeTodo(id)}>-</button>
            <input
                type="checkbox"
                checked={complated}
                onChange={() => handleToggle(id)}/>
        </div>
    );
};

export default TodoItem;