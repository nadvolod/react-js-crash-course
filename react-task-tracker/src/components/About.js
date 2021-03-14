import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* The problem with using a is that if we click the Go Back,
            the entire page will reload which is extra slow
            with all of the network requests. We fix this problem by
            using Link from 'react-router-dom' 
            which won't redo all of the web requests*/}
            {/* <a href='/'>Go Back</a> */}
            <Link to='/'>Go Back</Link>

        </div>
    )
}

export default About
