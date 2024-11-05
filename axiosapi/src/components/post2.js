import { useEffect,useState } from "react";
import { getapi,deletepost } from "../service/service2";
import Postform from "./postform";


export default function Getpost (){

    const [posts,setposts] = useState([])

    useEffect(()=>{
        const APIGET = async ()=>{
        const respone = await getapi()
        const data = (await respone).data
        setposts(data)
        };
        APIGET();
    },[])

    const handleAddPost = (newPost) => {
        setposts((prevPosts) => [...prevPosts, newPost]);
    };

    const handleDelete = async (id) => {
        await deletepost(id); // เรียกใช้งาน deletepost
        console.log(`Attempted to delete post with ID ${id}`);
    };
    return (
        <div>
            <Postform onAdd={handleAddPost}/>
            <ul>
                {posts.map((post)=>
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={handleDelete(post.id)}></button>
                </li>
                )}
            </ul>
        </div>
    )
}