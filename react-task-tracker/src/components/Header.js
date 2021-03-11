import Button from './Button'

// With the extension installed, running 'rafce' will create a new component
const Header = ({title, onAdd, displayAddTask}) => {
    return (
        // The header is pulling styling from 'header' in index.css
        <header className='header'>
            <h1>{title}</h1>
            {/* The button is pulling styling from our index.css
            by referencing class 'btn' */}
            <Button 
                color={displayAddTask ? 'red' : 'green'} 
                text={displayAddTask ? 'Close': 'Add'} 
                onClick={onAdd}/>
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

