// With the extension installed, running 'rafce' will create a new component
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
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

