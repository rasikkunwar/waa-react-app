import './Post.css'
const Post = (props) => {
    return (
        <div className="Content" onClick={()=> props.handleSelectedPost({id:props.id,title:props.title,author:props.author,content:props.content})}>
            <div>
                Id:{props.id}
            </div>
            <div>
                Title:{props.title}
            </div>
            <div>
                Author:{props.author}
            </div>
        </div>
    )
}
export default Post