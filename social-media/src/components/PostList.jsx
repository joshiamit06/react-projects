import { useContext } from "react";
import { SocialMediaContext } from "../store/social-media-store";
import { MdDelete } from "react-icons/md";

const PostList = () => {
  const { posts, deletePost } = useContext(SocialMediaContext);
  return (
    <div className="post-list-container">
      {posts.length === 0 ? (
        <div className="empty-message">
          <p>No posts to display. Create a new post!</p>
        </div>
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
              <p className="card-text">{post.content}</p>
              {post.tags.map((tag) => (
                <span key={tag} className="badge text-bg-primary hashtag">
                  {tag}
                </span>
              ))}
              <hr />
              <span type="" className="badge text-bg-info">
                Reactions
                <span className="badge text-bg-secondary reactions">
                  {post.reactions}
                </span>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
