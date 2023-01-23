import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import NewPostForm from "./component/new-post-form/NewPostForm";
import PostList from "./component/post-list/PostList";
import data from "./data.js"
import { PostContext } from "./context/post-context/PostContext";

function App() {
  const [contentList, setContentList] = useState(data)

  const handleAddPost = ({id,title,info,image}) => {
    setContentList(prevState=>[...prevState, {id,title,info,image}])
  }

  const handleDeletePost = (id) => {    
    setContentList(prevState=>prevState.filter(c=>c.id!==id))
  }
  
  return (
    <div className="App">
        <Header/>
      <main>
        <section>
          <PostContext.Provider value={handleAddPost}>
          <NewPostForm />
          </PostContext.Provider>
        </section>
        <section>
          <PostContext.Provider value={handleDeletePost}>
          <PostList contentList={contentList} />
          </PostContext.Provider>
        </section>

      </main>
    </div>
  );
}

export default App;
