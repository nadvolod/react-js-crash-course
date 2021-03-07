import Task from './Task'

const Tasks = ({tasks}) => {
    // Everything is still the same, however, now the list is part
    // of our component state
    return (
        <>
            {tasks.map((task) => (
                // A child in a list should have a unique key
                <Task key={task.id} task={task} />
             ))}
        </>
    )
}

export default Tasks
