import axios  from "axios";


const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

const getapi = () => api.get('/posts')
const createAdd = (NewPost) => api.post('/posts',NewPost)
const deletepost = async (id) => {
    try {
        const response = await api.delete(`/posts/${id}`);
        console.log(`Post with ID ${id} deleted successfully`, response.status);
    } catch (error) {
        console.error("Error deleting post:", error);
    }
};

export {getapi,createAdd,deletepost}