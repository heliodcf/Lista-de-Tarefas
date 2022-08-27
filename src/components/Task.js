import React from 'react';
import "./Task.css";
import {CgClose, CgInfo} from 'react-icons/cg'
import {useNavigate} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`)
    }

    return (
        <div className='task-container' 
        style={task.completed ? { borderLeft: "6px solid chartreuse" } : {} }>
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>

                {task.title}
                </div>
                <div className='button-container'>
 
                        <button className='see-task-datails-button' onClick={handleTaskDetailsClick} >
                        <CgInfo />
                        </button>

                    <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>
                        <CgClose />
                        </button>
                </div>
        </div>


    )
    // return <div className='task-container'>{task.title}</div>

};
 
export default Task;