const PostDetail = (props) =>  {
    return (
        <div className="postDetail">
         <h4 id="title">{props.postDetail.title}</h4>
         <h5 id="author">{props.postDetail.author}</h5>
         <p id="content">{props.postDetail.content}</p>
         <div className="actionBtn">
            <button id="editBtn">Edit</button>
            <button id="deleteBtn">Delete</button>
            <button id="closeBtn" onClick={props.handleClosePost}>Close</button>
         </div>
        </div>
    )
}

export default PostDetail;