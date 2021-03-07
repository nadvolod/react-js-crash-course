import Button from './Button'

// With the extension installed, running 'rafce' will create a new component
const Header = ({title}) => {
    //Defining a click function that will be passed to the onClick property in the Button
    const onClick = () =>{
        console.log('click')
    }

    return (
        // The header is pulling styling from 'header' in index.css
        <header className='header'>
            <h1>{title}</h1>
            {/* The button is pulling styling from our index.css
            by referencing class 'btn' */}
            <Button color='green' text='Add' onClick={onClick}/>
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

