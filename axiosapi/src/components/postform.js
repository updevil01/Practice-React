    import { useState } from "react";
    import { createAdd } from "../service/service2";

    export default function Postform({onAdd}) {
    const [title, setitle] = useState("");
    const [body, setbody] = useState("");
    const handlePost = async(e) => {
        e.preventDefault();
        const NewPost = {
        title: title,
        body: body,
        };
        try {
            const response = await createAdd(NewPost);
            // ตรวจสอบว่า response.data มีค่าที่ถูกต้องหรือไม่
            if (response && response.data) {
                onAdd(response.data); // ส่งข้อมูลที่ถูกต้อง
                // รีเซ็ตค่าหลังจากเพิ่มโพสต์เสร็จ
                setitle('');
                setbody('');
            } else {
                console.error("No data received from API");
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };
    

    return (
        <form onSubmit={handlePost}>
        <div>
            <label>Title</label>
            <input
            value={title}
            onChange={(e)=>setitle(e.target.value)}></input>
            <label>Body</label>
            <input
            value={body}
            onChange={(e)=>setbody(e.target.value)}></input>
            <button type="submit">ok</button>
        </div>
        </form>
    );
    }
