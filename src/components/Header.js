import { Link } from "react-router-dom";

import { FaSpaceShuttle } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { WiMoonAltWaxingCrescent6 } from "react-icons/wi";
import text from './../assets/text'


function Header() {
  return (
    <div className="header">
      <nav>
        <div className='text'>
          <h1>{text.titre}</h1>
        </div>
        <ul>
          <li><Link to='/home' className="spacing"> <FaSpaceShuttle /> {text.home}</Link></li>
          <li><Link to='/favoris' className="spacing"><BsFillHeartFill /> {text.favoris}</Link></li>
          <li><Link to='/settings' className="spacing"><WiMoonAltWaxingCrescent6 /> {text.settings}</Link></li>
        </ul>
      </nav>
    </div >
  )
}

export default Header;