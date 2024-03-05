import Feedback from './Feedback';
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <div className=''>
        <nav className='navBar'>
        <Logo />
        <div className='searchBar'>
            <input type="text" />
            <button> <FaSearch /> </button>
        </div>
        <Feedback />
        </nav>
    </div>
  )
}

export default NavBar