import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

function Post({post}){
    const [{deletePost}] = useContext(PostList)
    return(
    <div className="card post-card" style={{width: "25rem"}}>
    <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
        className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={()=> deletePost(post.id)}> 
        <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=>(<span key={tag} className="badge text-bg-primary hashtag">
            {tag}
        </span>))}
        <hr />
        <span type="" className="badge text-bg-info">
        Reactions 
        <span className="badge text-bg-secondary reactions">{post.reactions}</span>
        </span>

    </div>
    </div>
    )
}


export default Post