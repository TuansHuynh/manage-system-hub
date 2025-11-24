import { Link } from "react-router-dom";

export default function Links(name = '', link = '', to = '') {
    return (
        <Link to={to} className={`links ${link}`}>
            {name}
        </Link>
    );
}