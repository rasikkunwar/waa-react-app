import React from "react";
import Post from "../../components/Post/Post";
export const PostIdContext = React.createContext();
const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <PostIdContext.Provider value={post.id}>
        <Post
          title={post.title}
          author={post.author}
          content={post.content}
          key={post.id}
          handleSelectedPost={props.handleSelectedPost}
        />
      </PostIdContext.Provider>
    );
  });
  return posts;
};

export default Posts;
