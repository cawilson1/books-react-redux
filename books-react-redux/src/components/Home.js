import React, { useState, useEffect } from 'react'
import Books from "./Books";
import axios from "axios";
import { Link, Router } from "@reach/router";
import Details from '../components/Details'


const Home = () => {
    const [properties, setProperties] = useState({});
    useEffect(() => {
      console.log("here");
      axios
        .get("http://localhost:2500/books")
        .then(res => {
          console.log(res);
          const books = res.data;
  
          setProperties(books);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    console.log(properties);
    return (
      <div>
        <Router>
          <Books path="/" props={properties} />
          <Details path="/details"/>
        </Router>
      </div>
    );
}

export default Home