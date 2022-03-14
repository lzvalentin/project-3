import React from 'react'

export default function Comment (props) {
    return (
        <div>
            <h3>Title: {props.title}</h3>
            {/* <h2>{props.title} </h2> */}
            <h5><p>Body: {props.body}</p></h5>
            <hr/>
        </div>
    )
}
