import React, {FC} from 'react';
import {TodoType} from "../types";
import {Button, Checkbox} from "@mui/material";

interface typeTodoItem extends TodoType {
    removeTodo: (id: number) => void,
    handleToggle: (id: number) => void,
}

const TodoItem: FC<typeTodoItem> = (props) => {
    const {removeTodo, id, title, complated, handleToggle} = props
    return (
        <div className="todos">
            <h2 className={complated ? 'noactive' : ''}>{title}</h2>
            <div style={{gap: '10px'}}>
                <Button variant='contained' onClick={() => removeTodo(id)}>&times;</Button>
                <Checkbox checked={complated} onChange={() => handleToggle(id)}/>

            </div>
        </div>
    );
};

export default TodoItem;