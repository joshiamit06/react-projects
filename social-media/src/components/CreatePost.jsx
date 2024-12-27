import { useContext, useRef } from "react";
import { SocialMediaContext } from "../store/social-media-store";


const CreatePost = () => {
    const {setCreateNewPost} = useContext(SocialMediaContext)

    const titleElement = useRef()
    const contentElement = useRef()
    const reactionsElement = useRef()
    const tagsElement = useRef()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const title = titleElement.current.value
        const content = contentElement.current.value
        const reactions = reactionsElement.current.value
        const tags = tagsElement.current.value.split(" ")
        const id = Date.now()
        setCreateNewPost({id, title,content,reactions,tags})
        titleElement.current.value = ""
        contentElement.current.value = ""
        reactionsElement.current.value = ""
        tagsElement.current.value = ""
    }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today..!"/>
    </div>
    <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea rows="4" type="text"  ref={contentElement} className="form-control" id="body" placeholder="Tell us more about it."/>
    </div>
    <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
    </div>

    <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter Your Hashtags Here</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Your Hash tags"/>
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
    </form>

  );
};

export default CreatePost;
