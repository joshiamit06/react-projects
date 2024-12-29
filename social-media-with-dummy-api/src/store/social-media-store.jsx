import { createContext, useEffect, useState } from "react";

export const SocialMediaContext = createContext();

const DEFAULT_POSTS = []

const SocialMediaContextProvider = ({ children }) => {

  const [posts, setPosts] = useState(DEFAULT_POSTS)
  const [fetching, setFetching] = useState(false)


  const setCreateNewPost = (newPost) => {
    setPosts(()=>{
      const newPostList = [newPost,...posts]
      return newPostList
    })
  }

  const addPostsInBulk = (posts) =>{
    const newPostList = posts
    setPosts(newPostList)
  }

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        addPostsInBulk(data.posts);
        setFetching(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error.message);
        }
      })

    return () => {
      controller.abort();
    };
  }, []);


  const deletePost = (postToDelete) => {
    const newPostList = posts.filter(post => post.id !==postToDelete)
    setPosts(newPostList)
  }

  return (
    <SocialMediaContext.Provider value={{setCreateNewPost,posts, deletePost, fetching}}>
      {children}
    </SocialMediaContext.Provider>
  );
};



export default SocialMediaContextProvider;
