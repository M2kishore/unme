import React from 'react';
const Post = ({ post }) => {
    return (
        <div className="post row" key={post.id}>
                <div className="card col s12 m6 offset-m3">
                    <br />
                    <div className="card-image waves-effect waves-block">
                        <img className="activator" src={post.imageURL} alt="post_img"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4 left">{post.title}</span>
                        <span className="date-font right">{post.date.day + "/" + post.date.month + "/" + post.date.year}</span>
                    </div>
                    <div className="card-reveal post-content flow-text">
                        <span className="card-title center grey-text text-darken-4">{post.title}</span>
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
    );
}

export default Post;