// We are utilizing npm package react-icons to add icons to our markup
import {FaTimes} from 'react-icons/fa'

// rafce - React arrow function component export
const Task = ({task, onDelete, onToggle}) => {
    return (
        // Now double clicking on the task div will perform the onToggle() which is passed down from App.js
        <div className='task' onDoubleClick={()=> onToggle(task.id)}>
            {/* FaTimes is a component from react-icons that creates an X */}
            <h3>{task.text} 
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
            // onClick event will call a function onDelete() which is passed from the parents
            onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
