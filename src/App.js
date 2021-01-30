import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY3
const [data, setData] = useState({ hits: [] });

useEffect(() => {
  const result =  axios.get(
    'https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}',
  );

  setData(result.data);
}, []);



  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>

  );
}

export default App;
