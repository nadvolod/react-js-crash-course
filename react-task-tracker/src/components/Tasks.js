import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    // Everything is still the same, however, now the list is part
    // of our component state
    return (
        <>
            {tasks.map((task) => (
                // A child in a list should have a unique key
                <Task key={task.id} task={task}
                // When the onDelete is called, it will call the event passed in through param 'onDelete' 
                onDelete={onDelete}
                //We created a toggleReminder() in App.js and passed it to Tasks
                //Then we caught that in the onToggle prop of Tasks
                //And here we are passing it to our Task
                onToggle={onToggle}
                />
             ))}
        </>
    )
}

export default Tasks
