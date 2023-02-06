import React, { useEffect, useRef, useState } from "react";
import PostDetail from "../components/Post/PostDetail";
import Posts from "./Posts/Posts";
import axios from "axios";
import AddPost from "../components/Post/AddPost";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import PageRoute from "../routes/PageRoute";
const Dashboard = () => {

  const [showAddPost, setShowAddPost] = useState(false);

  const handleCloseAddPost = () => {
    setShowAddPost(false);
  };
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <PageRoute></PageRoute>
      </BrowserRouter>
    </div>
  );
};
export default Dashboard;
