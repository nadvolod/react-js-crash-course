import {useState} from 'react'

const Tasks = () => {
    // Everything is still the same, however, now the list is part
    // of our component state
    const [tasks, setTasks] = useState(
        [
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
    )
    return (
        <>
            {tasks.map((task) => (
                // A child in a list should have a unique key
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
