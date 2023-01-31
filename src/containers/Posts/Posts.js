import Post from "../../components/Post/Post"

const Posts = (props) => {
    const posts = props.posts.map(post => {
        return <Post id={post.id} title={post.title} author={post.author} content={post.content} key={post.id} handleSelectedPost={props.handleSelectedPost}/>
    });
    return posts;
}

export default Posts;