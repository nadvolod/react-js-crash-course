// We are utilizing npm package react-icons to add icons to our markup
import {FaTimes} from 'react-icons/fa'

// rafce - React arrow function component export
const Task = ({task}) => {
    return (
        <div className='task'>
            {/* FaTimes is a component from react-icons that creates an X */}
            <h3>{task.text} <FaTimes />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
