import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Components/Header/Header';

function App() {
  const [names, setName] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setName(data))
   }, [])
  return (
    <div className="App">
      <Header></Header>
     <Movie></Movie>
     {
       names.map(name => <Student name={name.name}></Student>)
     }
    </div>
  );
}
function Movie(){
  const [movie, setMovie] = useState(5);
  const handleClick = () => setMovie(movie+1)
  return (
    <div>
      <button onClick={handleClick}>add movie</button>
      <h3>Movie i watched: {movie}</h3>
      <MovieDisplay movies={movie+5}></MovieDisplay>
      <MovieDisplay movies={movie}></MovieDisplay>
      <MovieDisplay movies={movie*2}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return (
    <div>
       <h4>Movies i didnt watch:{props.movies} </h4>
       
    </div>
  )
}
function Student(props){
  
  
  return (
    <div>
      <h4>Student name: n{props.name} </h4>
      
    </div>
  )
}
export default App;
