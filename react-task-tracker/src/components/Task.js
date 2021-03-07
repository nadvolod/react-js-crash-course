import React from 'react'

// rafce - React arrow function component export
const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
