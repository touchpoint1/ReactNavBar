import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../style/main.css";
function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href=""></a>
                <a href="">Home</a>
                <a href="">Register</a>
                <a href="">Login</a>
                <a href="">Signout</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
export default Navbar;