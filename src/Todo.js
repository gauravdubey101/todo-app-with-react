import React from 'react'

export default function Todo(props) {
    //props = properties
    return (
        <div>
           <li>{props.text}</li> 
        </div>
    )
}
