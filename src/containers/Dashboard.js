import { useEffect, useRef, useState } from "react";
import PostDetail from "../components/Post/PostDetail";
import Posts from "./Posts/Posts";
import axios from "axios";
import AddPost from "../components/Post/AddPost";
const Dashboard = () => {
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

  const inputRef = useRef(null);

  const handleSelectedPost = (data) => {
    axios
      .get("http://localhost:8080/api/v1/posts/" + data.id)
      .then((response) => {
        setSelectedPostDetail(response.data);
      });
    setShowPostDetail(true);
  };
  const changeTitle = (event) => {
    let posts = [...postState];
    posts[0].title = inputRef.current?.value;
    setPostState(posts);
  };
  const handleClosePost = () => {
    setSelectedPostDetail({ id: "", title: "", author: "", content: "" });
    setShowPostDetail(false);
  };

  const [showAddPost, setShowAddPost] = useState(false);

  const handleCloseAddPost = () => {
    setShowAddPost(false);
  };
  return (
    <div>
      <div className="addPostBtn">
        <button id="addPostBtn" onClick={()=>setShowAddPost(true)}>Add Post</button>
      </div>
      <div className="post">
        <Posts
          posts={postState}
          handleSelectedPost={handleSelectedPost}
        ></Posts>
      </div>
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
      {showPostDetail && (
        <PostDetail
          postDetail={selectedPost}
          handleClosePost={handleClosePost}
          fetchPosts={getPosts}
        ></PostDetail>
      )}
      {showAddPost && <AddPost handleCloseAddPost={handleCloseAddPost} fetchPosts={getPosts}></AddPost>}
    </div>
  );
};
export default Dashboard;
