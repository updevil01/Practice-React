import React, { useEffect } from 'react'
import { getPost,deletePost,createPost } from '../service/service'
import { useState } from 'react'

export default function Posts(){
    const [posting,setposting] = useState({ title: '', body: '' });
    const [posts,setpost] = useState([])
    useEffect(()=>{
        const test = async () => {
            const respone = await getPost();
            const data = respone.data
            setpost(data)
        }
        test()
    },[])
    
    const handleDelete = async (id)=>{
        const status = await deletePost(id)
        if(status === 200)
            setpost(posts.filter(post => post.id !== id))
    }

    const handleCreatepost = async (post)=>{
        const newPost = await createPost(post)
        setpost([...posts,newPost])
        setposting({ title: '', body: '' });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleCreatepost(posting)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={posting.title}
                    onChange={(e) => setposting({ ...posting, title: e.target.value })}
                />
                <textarea
                    placeholder="Body"
                    value={posting.body}
                    onChange={(e) => setposting({ ...posting, body: e.target.value })}
                ></textarea>
                <button type="submit">Create Post</button>
            </form>
            <ul>
                {posts.map((post)=>
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={()=>handleDelete(post.id)}>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}