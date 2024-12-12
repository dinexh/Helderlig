import './nav.css';
import { GiWoodPile } from "react-icons/gi";
const Nav = () => {
    return ( 
        <div className="nav-component">
            <div className="nav-component-in">
                <div className="nav-component-in-one">
                    <GiWoodPile  className='icon-nav'/>
                    <h1>WoodFlow</h1>
                </div>
                <div className="nav-component-in-two">
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
     );
}
 
export default Nav;