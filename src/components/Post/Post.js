import './Post.css'
import {PostIdContext} from  "../../containers/Posts/Posts"
import { useContext } from 'react'
const Post = (props) => {
    const id = useContext(PostIdContext);
    return (
        <div className="Content" onClick={()=> props.handleSelectedPost({id:id})}>
            <div>
                Id:{id}
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