import { Button } from "@skynexui/components";

// src/components/TaskItem.js
const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        
        <div>
            <span 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </span>
            <Button
                label='Excluir'
                onClick={() => onDelete(task.id)}
                colorVariant='neutral'
                variant='secondary'
            />
            
        </div>
    );
};

export default TaskItem;
