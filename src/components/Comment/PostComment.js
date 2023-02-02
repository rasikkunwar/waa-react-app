import axios from "axios";
import React, { useMemo, useState } from "react";
const PostComment = (props) => {
  //memo doesn't work with object props
  //memo doesn't work with useContext
  //memo works with props
  const [postComments,setPostComments] = useState();
  function getComments(id) {
    if(id){
    console.log("Render Inside Comments Api Call")
    axios
      .get("http://localhost:8080/api/v1/posts/comments/"+id)
      .then((response) => {
        const comments = response.data?.length
          ? response.data.map((item, index) => {
              return <p key={index}>{"=> " + item.name}</p>;
            })
          : "No comments";
          setPostComments(comments)
      });
    }
  }
  useMemo(()=>{getComments(props.id)},[props.id])
  console.log("Render Comments")
  return (
    <div className="comments">
      <h4 id="commentTitle">Comments</h4>
      {postComments}
    </div>
  );
};

export default React.memo(PostComment);
