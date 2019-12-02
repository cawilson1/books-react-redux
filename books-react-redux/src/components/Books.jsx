import React from "react";
import { useEffect, useState } from "react";

function Book({ props }) {
  console.log(props);
  console.log("here");
  const [year, setYear] = useState("");

  if (Object.keys(props).length === 0) {
    return <div>Loading</div>;
  } else if (year.length < 4) {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={e => {
              console.log(e.target.value);
              setYear(e.target.value);
            }}
          ></input>
        </form>
        <ul>
          {props.map(book => {
            return (
              <li key={book.isbn}>
                {book.title} <br />
                {book.isbn}
                <br />
                {book.author} <br />
                {book.date} <br />
                <img src={book.img_url} alt="img" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={e => {
              console.log(e.target.value);
              setYear(e.target.value);
            }}
          ></input>
        </form>
        <ul>
          {props
            .filter(book => book.date === year)
            .map(book => {
              return (
                <li key={book.isbn}>
                  {book.title} <br />
                  {book.isbn}
                  <br />
                  {book.author} <br />
                  {book.date} <br />
                  <img src={book.img_url} alt="img" />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
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
export default Book;
