import { Navigate, Route, Routes } from "react-router-dom";
import AddPost from "../components/Post/AddPost";
import Posts from "../containers/Posts/Posts";

export default function PageRoute(){
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="posts"/>}></Route>
            <Route path="posts" element={<Posts/>}></Route>
            <Route path="add-post" element={<AddPost/>}></Route>
        </Routes>
    )
}