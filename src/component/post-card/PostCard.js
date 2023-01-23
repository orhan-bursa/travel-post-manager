import React, {useContext}  from 'react'
import { PostContext } from '../../context/post-context/PostContext';

const PostCard = ({content}) => {
    const handleDeletePost = useContext(PostContext);
    return (
        <div className="card" key={content.id}>
                  <i className="fa-solid fa-delete-left icon delete" onClick={()=>handleDeletePost(content.id)}></i>
                  <img src={content.image} alt={content.title} />
                  <h4>{content.title}</h4>
                  <p>{content.info}</p>
                </div>
    )
}

export default PostCard;