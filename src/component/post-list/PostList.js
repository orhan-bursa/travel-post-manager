import React from 'react';
import PostCard from '../post-card/PostCard';

const PostList = ({contentList}) => {
    
    return (
        <div className="content-container">
            {contentList.map((content)=> <PostCard content={content} />)}
          </div>
    )
}

export default PostList;