import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        {menuOpened === false && mobile === true ?
        (<div 
        style={{backgroundColor: "var(--appColor)",
        padding: '0.5rem',
        borderRadius: '5px'}}
        
        onClick={() => setMenuOpened(true)}
        
        >
          <img src={Bars} alt="" style={{width: '1.5rem' , height: '1.5rem'}}/>
          </div>):
          (
        <ul className='header-menu'>
            <Link to="Home"  spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[orange] transition-all cursor-pointer"><li onClick={()=> setMenuOpened(false)}>Home</li></Link>
             <Link to="Programs"  spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[orange] transition-all cursor-pointer"><li onClick={()=> setMenuOpened(false)}>Programs</li></Link>
            <Link to="Plans"  spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[orange] transition-all cursor-pointer"><li onClick={()=> setMenuOpened(false)}>Plans</li></Link>
            <Link to="Testimonials"  spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[orange] transition-all cursor-pointer"><li onClick={()=> setMenuOpened(false)}>Testimonials</li></Link>
            <Link to="Join"  spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[orange] transition-all cursor-pointer"><li onClick={()=> setMenuOpened(false)}>Contact Us</li></Link>
        </ul>
          )}
    </div>
  )
}

export default Header