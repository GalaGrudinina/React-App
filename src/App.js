import React, {useState, useRef} from "react";
import PostItem from "./components/PostItem";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
const[posts, setPosts]=useState([
  {id:1, title:'JS', body:'description'},
  {id:2, title:'JS 1', body:'description'},
  {id:3, title:'JS 2', body:'description'},

])

const createPost=(newPost)=>{
setPosts([...posts, newPost])
}

const removePost=(post)=>{
setPosts(posts.filter(p=>p.id!==post.id))
}
  return (
    <div className="App">
     <PostForm create={createPost}/>
     {posts.length !==0
     ?<PostList remove={removePost} posts={posts} title="the list"/>
: <h1 style={{textAlign:'center'}}>
  No posts found</h1>
     }
    </div>
  );
}



export default App;
