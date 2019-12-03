import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';



function Details( props ) {
    const [properties, setProperties] = useState({})
    const [hasRendered, setHasRendered] = useState(false)
    async function requestBooks() {
        const books = await axios.get("http://localhost:2500/books")
        console.log("books", books);
        setProperties(books || []);
        console.log(properties)
    }
    if (!hasRendered){
        setHasRendered(true)
        requestBooks() 
    }
    
   
    if(Object.keys(props).length === 0){
        return <div>Loading</div>
    }
    return (
        <div>{console.log((properties.data))}</div>
    )
    
}

export default Details