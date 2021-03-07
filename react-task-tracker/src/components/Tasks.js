import React from 'react'

const tasks = [
    {
        id: 1,
        text: 'food',
        day: 'x',
        reminder: false
    },
    {    
        id: 2,
        text: 'hello',
        day: 'x',
        reminder: false
    }
]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
