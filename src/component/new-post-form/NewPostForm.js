import React, { useContext, useState } from 'react'
import { PostContext } from '../../context/post-context/PostContext';

const NewPostForm = () => {
    
    const id = Math.random() * 100 + Date.now();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [info, setInfo] = useState("");

    const handleAddPost = useContext(PostContext)
    
  return (    
    <div className="form-container">
            <h2>Create A Post</h2>
            <form action="">
              <input 
              type="text" 
              placeholder="Title"
              name="title" 
              id="title"
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              />
              <input 
              type="text" 
              placeholder="Image URL"
              name="image" 
              id="image"
              onChange={(e)=>setImage(e.target.value)}
              value={image}
              />
              <textarea 
              placeholder="Info"
              name="info" 
              id="info"
              rows={5}
              onChange={(e)=>setInfo(e.target.value)}
              value={info}
              />
            <input type="button" value="Add Post" className="btn" onClick={()=> handleAddPost({id,title,info,image})}/>
            </form>
          </div>
  )
}

export default NewPostForm