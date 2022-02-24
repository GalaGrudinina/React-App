import React, {useState, useRef} from "react";
import PostItem from "./components/PostItem";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
const[posts, setPosts]=useState([
  {id:1, title:'Python', body:'description'},
  {id:2, title:'Gala', body:'some text'},
  {id:3, title:'JS 2', body:'description'},

])
const[selectedSort, setSelectedSort]=useState('')

const createPost=(newPost)=>{
setPosts([...posts, newPost])
}

const removePost=(post)=>{
setPosts(posts.filter(p=>p.id!==post.id))
}

const sortPosts=(sort)=>{
  setSelectedSort(sort)
setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
}
  return (
    <div className="App">
     <PostForm create={createPost}/>
     <hr style={{margin:"15px 0"}} />
     <div>
       <MySelect value={selectedSort}
       onChange={sortPosts}
       defaultValue="Sorting by"
       options={[
         {value:"title", name:"Name"},
         {value:"body", name:"Description"},
       ]}
       />
     </div>
     {posts.length !==0
     ?<PostList remove={removePost} posts={posts} title="the list"/>
: <h1 style={{textAlign:'center'}}>
  No posts found</h1>
     }
    </div>
  );
}



export default App;
