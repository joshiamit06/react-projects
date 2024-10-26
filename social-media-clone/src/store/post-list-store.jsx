import { createContext, useReducer } from 'react';

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  });
const postListReducer = (currentPostList,action)=>{
    let newPostList = currentPostList
    if (action.type === "DELETE_POST"){
        newPostList = currentPostList.filter(post => post.id !==action.payload.postId)
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;

}

function PostListProvider({children}){
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
          type: "ADD_POST",
          payload: {
            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: reactions,
            userId: userId,
            tags: tags,
          },
        });
      };
    const deletePost = (postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId
            }
        })
    }

    return <PostList.Provider value={[
        {postList,addPost,deletePost}
    ]}>
        {children}
    </PostList.Provider>
} 

const DEFAULT_POST_LIST = [{
    id:'1',
    title:'Going to mumbai',
    body:'Hi friends, I am going to mumbai today.',
    reactions:1,
    userId:'user-9',
    tags:['vacation','mumbai']
},
{
    id:'2',
    title:'Going to Ladakh',
    body:'Going to ladakh for enjoying scenic beauty of himalayas',
    reactions:1,
    userId:'user-2',
    tags:['vacation','ladakh','enjoy']
},
]

export default PostListProvider