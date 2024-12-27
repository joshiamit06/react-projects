import { createContext, useState } from "react";

export const SocialMediaContext = createContext();

const DEFAULT_POSTS = []

const SocialMediaContextProvider = ({ children }) => {

  const [posts, setPosts] = useState(DEFAULT_POSTS)

  const setCreateNewPost = (newPost) => {
    setPosts(()=>{
      const newPostList = [...posts,newPost]
      return newPostList
    })
  }

  const addPostsInBulk = (posts) =>{
    const newPostList = posts
    setPosts(newPostList)
  }

  const deletePost = (postToDelete) => {
    const newPostList = posts.filter(post => post.id !==postToDelete)
    setPosts(newPostList)
  }

  return (
    <SocialMediaContext.Provider value={{setCreateNewPost,posts, deletePost, addPostsInBulk}}>
      {children}
    </SocialMediaContext.Provider>
  );
};



export default SocialMediaContextProvider;
