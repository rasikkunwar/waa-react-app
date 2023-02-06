import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

const AddPost = (props)=>{
    const newPostForm = useRef();
    const navigate = useNavigate();
    function addPost(event){
        event.preventDefault();
        const form = newPostForm.current;
        const data = {
            title: form['title'].value,
            author: form['author'].value,
            content: form['content'].value
        };
        axios.post("http://localhost:8080/api/v1/posts",data)
        .then(data => {
            console.log('Success', data);
            navigate("/")
        })
        .catch(error => {
            console.error('Error' ,error);
        })
    }
    return (
        <div className="addPost">
            <form id="addPostForm" ref={newPostForm}>
                <div id="postTitle">
                    <label>Title:</label>
                    <input type={'text'} name={'title'}/>
                </div>
                <div id="postContent">
                    <label>Content:</label>
                    <textarea rows={5} cols={50} name={'content'}/>
                </div>
                <div id="postAuthor">
                    <label>Author:</label>
                    <input type={'text'} name={'author'}/>
                </div>
                <div id="postBtn">
                    <button id="submitPostBtn" onClick={addPost}>Add Post</button>
                    <button id="cancelBtn" onClick={()=>navigate("/")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddPost