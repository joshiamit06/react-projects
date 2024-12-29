import { useContext, useEffect, useState } from "react";
import { SocialMediaContext } from "../store/social-media-store";
import { MdDelete } from "react-icons/md";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { fetching, posts, deletePost } = useContext(SocialMediaContext);


  return (
    <div className="post-list-container" key={posts.id}>
      {fetching && <LoadingSpinner/>}
      {!fetching && (posts.length === 0 ? (
        <WelcomeMessage/>
      ) : (
        posts.map((post) => (
          <div className="card post-card" style={{ width: "25rem" }}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <span
                className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <MdDelete />
              </span>
              <span className="user-id-badge">User ID: {post.userId}</span>
              <p className="card-text">{post.body}</p>
              {post.tags.map((tag) => (
                <span key={tag} className="badge text-bg-primary hashtag">
                  {tag}
                </span>
              ))}
              <hr />
              <div className="reactions-container">
                <span className="badge text-bg-secondary reactions">
                  Likes: {post.reactions.likes}
                </span>
                <span className="badge text-bg-secondary reactions dislikes">
                  Dislikes: {post.reactions.dislikes}
                </span>
              </div>
            </div>
          </div>
        ))
      ))}
    </div>
  );
};

export default PostList;
