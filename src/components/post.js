import e from 'cors';
import React from 'react';
import { useState } from 'react';
import {BASEURL} from "../App"
export default function Post () {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        // const [userId, setUserId] = useState('');
        const [category, setCategory] =useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const post = { title, content, category };
            fetch(`${BASEURL}/posts`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(post)
            }).then (()=>{
                console.log(post)
            })
        
        }


        return (
            <div className='postbox'>
            <p>Post about something</p>
            <form className='formbox' onSubmit={(e)=> handleSubmit(e)}>
              <label>Post Title</label>
              <input type="text" required value={title} onChange={(e)=> setTitle (e.target.value)}/>
              <label>Post Body</label>
              <textarea required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
              <select onChange={(val) => this.handlePeriodChange(val.target.value)} className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <option value="TODAY">Today</option>
                <option value="THIS_WEEK" >This Week</option>
                <option value="THIS_MONTH">This Month</option>
                <option value="THIS_YEAR">This Year</option>
                <option selected value="LAST_AVAILABLE_DAY">Last Availabe NAV Day</option>
              </select>
              <button>Add post</button>
            </form>
            </div>
    
        )
    }
        
