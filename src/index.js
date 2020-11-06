import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })


ReactDOM.render(<App />, document.getElementById("root"));

