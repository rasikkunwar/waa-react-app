import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Post from "../../components/Post/Post";
import PostDetail from "../../components/Post/PostDetail";
export const PostIdContext = React.createContext();
export const PostDetailContext = React.createContext();

const Posts = (props) => {
  const [postState, setPostState] = useState([]);

  function getPosts() {
    axios.get("http://localhost:8080/api/v1/posts").then((response) => {
      setPostState(response.data);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [selectedPost, setSelectedPostDetail] = useState({
    id: "",
    title: "",
    author: "",
    content: "",
    comments:[]
  });

  let [showPostDetail, setShowPostDetail] = useState(false);


  const handleSelectedPost = (data) => {
    axios
      .get("http://localhost:8080/api/v1/posts/" + data.id)
      .then((response) => {
        setSelectedPostDetail(response.data);
      });
    setShowPostDetail(true);
  };


  const handleClosePost = () => {
    setSelectedPostDetail({ id: "", title: "", author: "", content: "" });
    setShowPostDetail(false);
  };

  const inputRef = useRef(null);

  const changeTitle = (event) => {
    let posts = [...postState];
    posts[0].title = inputRef.current?.value;
    setPostState(posts);
  };
  const posts =
    postState &&
    postState.map((post) => {
      return (
        <PostIdContext.Provider value={post.id}>
          <Post
            title={post.title}
            author={post.author}
            content={post.content}
            key={post.id}
            handleSelectedPost={handleSelectedPost}
          />
        </PostIdContext.Provider>
      );
    });
  return (
    <React.Fragment>
      <div className="textInput">
        <input
          type="text"
          placeholder="Enter title here"
          ref={inputRef}
        ></input>
        <button id="changeTitle" onClick={changeTitle}>
          Change Title
        </button>
      </div>
      <div className="post">{posts}</div>

         {showPostDetail && (
        <PostDetailContext.Provider value={selectedPost}>
        <PostDetail
          handleClosePost={handleClosePost}
          fetchPosts={getPosts}
        ></PostDetail>
        </PostDetailContext.Provider>
      )}
    </React.Fragment>
  );
};

export default Posts;
