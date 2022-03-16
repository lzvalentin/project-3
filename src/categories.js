import React from 'react'


export default function Categories (props) {
    return (
        <div>
            {/* <h2>{props.category}</h2> */}
            <h3>{props.title}</h3>
            <h5><p>{props.body}</p></h5>
            {/* <h5><p>{props.userData}</p></h5> */}
            <hr/>
        </div>


    //     <div>
    //     {/* <p>My Posts</p> */}
    //     <ul>
    //       <li><a href="">{props.category}</a></li>
    //     </ul>
    //   </div>

    )
}