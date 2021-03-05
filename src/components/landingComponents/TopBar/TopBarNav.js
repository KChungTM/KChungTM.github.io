import "./TopBarNav.css";
import NavButton from "./topBarComponents/NavButton"

function TopBar() {
    return (
        <nav className="topBarDiv">
            <div className="navButtonDiv">
                <ul className="navButtons">
                    <NavButton text="about" link="#about"/>
                    <NavButton text="experience" link="#experience"/>
                    <NavButton text="projects" link="#projects"/>
                    <NavButton text="contact" link="#contact"/>
                </ul>
            </div>
        </nav>
    );
}

export default TopBar;