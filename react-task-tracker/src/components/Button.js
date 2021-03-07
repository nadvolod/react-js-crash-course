// impt
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button
        onClick={onClick} 
        style={{backgroundColor: color}} 
        className='btn'>{text}
        </button>
    )
}

//These are default values
Button.defaultProps = {
    color: 'steelblue'
}

// These are types for the properties such as having `text` be a string
Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
