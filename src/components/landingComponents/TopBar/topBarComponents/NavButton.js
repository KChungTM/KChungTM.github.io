import "./NavButton.css";

function NavButton(props) {
    return (
        <li className="navButton">
            <a href={props.link}>{props.text}</a>
        </li>
    );
}

export default NavButton;