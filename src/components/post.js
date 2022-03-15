import React from 'react'

export default function Post (props) {
  return (
        <div>
            <h3>{props.title}</h3>
            <h5><p>{props.body}</p></h5>
            <h5><p>{props.UserId}</p></h5>
            <hr/>
        </div>
    )
}
