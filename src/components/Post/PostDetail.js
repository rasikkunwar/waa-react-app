import axios from "axios";
import React, { useContext } from "react";
import { PostDetailContext } from "../../containers/Dashboard";
import PostComment from "../Comment/PostComment";

const PostDetail = (props) =>  {
    const data = useContext(PostDetailContext);
    function deletePost(){
        axios.delete("http://localhost:8080/api/v1/posts/"+data.id).then(response=>{
            props.fetchPosts();
            props.handleClosePost();
        })
    }
    return (
        <div className="postDetail">
         <h4 id="title">{data.title}</h4>
         <h5 id="author">{data.author}</h5>
         <p id="content">{data.content}</p>
         <div className="actionBtn">
            <button id="editBtn">Edit</button>
            <button id="deleteBtn" onClick={()=>deletePost}>Delete</button>
            <button id="closeBtn" onClick={props.handleClosePost}>Close</button>
         </div>
         <PostComment id={data.id}></PostComment>
        </div>
    )
}

export default PostDetail;