import axios from "axios";

const PostDetail = (props) =>  {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    function deletePost(id){
        axios.delete("http://localhost:8080/api/v1/posts/"+id).then(response=>{
            props.fetchPosts();
            props.handleClosePost();
        })
    }
    const comments = props.postDetail.comments.length ? props.postDetail.comments.map((item,index)=>{
        return <p key={index}>{"=> "+item.name}</p>
    }) : "No comments"
    return (
        <div className="postDetail">
         <h4 id="title">{props.postDetail.title}</h4>
         <h5 id="author">{props.postDetail.author}</h5>
         <p id="content">{props.postDetail.content}</p>
         <div className="actionBtn">
            <button id="editBtn">Edit</button>
            <button id="deleteBtn" onClick={()=>deletePost(props.postDetail.id)}>Delete</button>
            <button id="closeBtn" onClick={props.handleClosePost}>Close</button>
         </div>
         <div className="comments">
            <h4 id="commentTitle">Comments</h4>
            {comments}
         </div>
        </div>
    )
}

export default PostDetail;