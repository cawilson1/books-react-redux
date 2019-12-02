import React from "react";
function Book({props}) {
    console.log(props);
    console.log('here');
    
    if(Object.keys(props).length === 0){
        return <div>Loading</div>
    }else{
           return (
    <div>
        <ul>
            {props.map(book => {
                return (
                    <li key={book.isbn}>
                        {book.title} <br/>
                        {book.isbn}<br/>
                        {book.author} <br/>
                        {book.date} <br/>
                        <img src={book.img_url} alt="img" />
                    </li>
                )
            })}
        </ul>
        </div>) 
    }

//   return <div>
//     {props.title}
//     <br />
//     {props.isbn}
//     <br />
//     {props.author}
//     <br />
//     {props.date}
//     <br />
//     <img src={props.img_url} alt="img" />
//   </div>
}
export default Book;