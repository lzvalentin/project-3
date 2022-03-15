import React from 'react';
import { useState } from 'react';
import {BASEURL} from "../App"
export default function Post () {
        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        // const [userId, setUserId] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const post = { title, body };
            fetch(`${BASEURL}/posts`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(post)
            }).then (()=>{
                console.log("create post")
            })
        
        }
        return (
            <div className='postbox'>
            <p>Post about something</p>
            <form className='formbox' onSubmit={(e)=> handleSubmit(e)}>
              <label>Post Title</label>
              <input type="text" required value={title} onChange={(e)=> setTitle (e.title.value)}/>
              <label>Post Body</label>
              <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
              <button>Add post</button>
            </form>
            </div>
    
        )
    }
        
