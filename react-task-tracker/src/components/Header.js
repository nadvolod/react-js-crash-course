import Button from './Button'
import { useLocation } from 'react-router-dom'

// With the extension installed, running 'rafce' will create a new component
const Header = ({ title, onAdd, displayAddTask }) => {
    const location = useLocation()

    return (
        // The header is pulling styling from 'header' in index.css
        <header className='header'>
            <h1>{title}</h1>
            {/* The button is pulling styling from our index.css
            by referencing class 'btn' */}
            {/* location.pathname allows us to figure out where we are
            in our applicaiton and use that information to render our button.
            This way, it won't appear on any other page besides the 
            '/' page */}
            {location.pathname === '/' &&
                <Button
                    color={displayAddTask ? 'red' : 'green'}
                    text={displayAddTask ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            }
        </header>
    )
}

// We can set default props on our component that will appear unless
// they are overriden by a call from the component like this:
// <Header title='Hello'/>

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header

