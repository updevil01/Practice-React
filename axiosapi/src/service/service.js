import axios from "axios";
const api =axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

const getPost= ()=>api.get("/posts")

const deletePost = async (postId) => {
    try {
      const response = await api.delete(`/posts/${postId}`);
      console.log(`Post with ID ${postId} deleted`, response.status);
      return response.status;
    } catch (error) {
      console.error(`Error deleting post with ID ${postId}:`, error);
    }
  };

  const createPost = async (newPost) => {
    try {
      const response = await api.post("/posts", newPost);
      console.log("Post created:", response.data);
      return response.data; 
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };


  
export {getPost , deletePost,createPost}