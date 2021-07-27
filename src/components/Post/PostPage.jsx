import React from "react";
import HeaderBar from '../Home/Header';
import CreatePost from "./PostForm";


export default function Post() {
    return(
        <div className="post">
            <HeaderBar/>
            <CreatePost/>
        </div>
    )
}