import { useContext, useRef } from "react";
import { SocialMediaContext } from "../store/social-media-store";

const CreatePost = () => {
  const { setCreateNewPost } = useContext(SocialMediaContext);

  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = {
      likes: reactionsElement.current.likes?.value || 0,
      dislikes: reactionsElement.current.dislikes?.value || 0,
    };
    const tags = tagsElement.current.value.split(" ");
    const id = Date.now();
    setCreateNewPost({ id, title, body, reactions, tags });
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.likes.value = "";
    reactionsElement.current.dislikes.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={bodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Reactions</label>
        <div className="reaction-inputs">
          <div className="likes">
            <label htmlFor="likes" className="form-label">
              Likes
            </label>
            <input
              type="number"
              className="form-control"
              id="likes"
              ref={(el) =>
                (reactionsElement.current = {
                  ...reactionsElement.current,
                  likes: el,
                })
              }
              placeholder="Enter likes"
            />
          </div>
          <div className="dislikes">
            <label htmlFor="dislikes" className="form-label">
              Dislikes
            </label>
            <input
              type="number"
              className="form-control"
              id="dislikes"
              ref={(el) =>
                (reactionsElement.current = {
                  ...reactionsElement.current,
                  dislikes: el,
                })
              }
              placeholder="Enter dislikes"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Your Hash tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
