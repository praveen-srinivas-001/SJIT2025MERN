import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
    return(
        <header>
            <nav>
                {/* <li>home</li> */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                {/* <span>
                    <ol>
                        <li></li>
                    </ol>
                </span> */}
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;