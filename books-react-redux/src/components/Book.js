import React from 'react'

export default function Book({text}){
    return (
        <div
            onChange={() => {
                console.log('onchange input');
                
                return <div>{text}</div>
            }}
            >
            
        </div>
    )
}