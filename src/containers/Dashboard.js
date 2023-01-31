import { useRef, useState } from "react"
import PostDetail from "../components/Post/PostDetail"
import Posts from "./Posts/Posts"
const Dashboard = () => {
    const [postState, setPostState] = useState([
        {
            id:123,title:"WAA",author:"Mike",content:"Qui pariatur eiusmod nisi sit sunt velit dolor Lorem veniam. Minim aliquip occaecat fugiat duis velit laboris pariatur occaecat sunt esse et qui consectetur consequat. Laborum cupidatat elit incididunt exercitation laboris magna dolor amet. Pariatur irure dolore voluptate fugiat nostrud excepteur fugiat proident Lorem aute esse minim. Duis commodo nisi labore laboris ipsum Lorem Lorem ex adipisicing."
        },
        {
            id:456,title:"WAP",author:"Dave",content:"Deserunt aliquip minim voluptate minim ex nisi commodo. Ea labore consequat ullamco sint dolor fugiat incididunt officia amet magna sit ullamco. Adipisicing dolor deserunt exercitation Lorem dolor ipsum nisi enim. Sit qui est occaecat do enim incididunt aute ut excepteur laboris eiusmod commodo. Ut exercitation cupidatat deserunt reprehenderit culpa commodo consectetur nulla cupidatat commodo ea non qui incididunt. Aliquip est dolor ea elit do pariatur aute ea dolor irure est. Ipsum excepteur elit pariatur sint Lorem dolor in ad."
        },
        {
            id:789,title:"MAP",author:"Tina", content:"Qui ullamco consequat cupidatat adipisicing exercitation nostrud do deserunt mollit voluptate laboris adipisicing. Cillum nisi non proident duis Lorem do dolore proident nostrud incididunt ex est deserunt in. Nostrud ullamco est elit Lorem do veniam mollit enim cupidatat mollit. Eiusmod ex consectetur minim consectetur voluptate dolor ipsum eiusmod ea veniam. Consequat aliquip aute ullamco consequat tempor ad adipisicing velit sunt reprehenderit aliqua ex ex dolore. Consequat ea nisi ea veniam velit irure aute nisi elit do consectetur Lorem labore consectetur."
        }
    ])

    const [selectedPost, setSelectecPostDetail] = useState({
        id:"",
        title:"",
        author:"",
        content:""
    })

    let [showPostDetail, setShowPostDetail] = useState(false)

    const inputRef= useRef(null)

    const handleSelectedPost = (data) =>{
        setSelectecPostDetail({id:data.id,title:data.title,author:data.author,content:data.content})
        setShowPostDetail(true)
    }
    const changeTitle =  (event)  => {
        let posts = [...postState];
        posts[0].title = inputRef.current?.value
        setPostState(posts)
    }
    const handleClosePost = () =>{
        setSelectecPostDetail({id:"",title:"",author:"",content:""})
        setShowPostDetail(false)
    }
    return (
        <div>
        <div className="post">
            <Posts posts={postState} handleSelectedPost={handleSelectedPost}></Posts>
        </div>
        <div className="textInput">
            <input type="text" placeholder="Enter title here" ref={inputRef}></input>
            <button id="changeTitle" onClick={changeTitle}>Change Title</button>
        </div>
         {showPostDetail && <PostDetail postDetail={selectedPost} handleClosePost={handleClosePost}></PostDetail>}
        </div>
        
    )
}
export default Dashboard