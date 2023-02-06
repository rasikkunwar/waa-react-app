import { Link } from "react-router-dom";
import "../Header/Header.css"
export default function Header(){
    return (
        <div className="nav">
            <Link to="posts">Posts</Link>
            <Link to="add-post">Add Post</Link>

        </div>
    )
}