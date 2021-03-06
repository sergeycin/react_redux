import React from 'react';
import './App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className="App">
     <div className="container">
       <div className="col">
      < PostForm />
       </div>
       <div className="col">
         <h2>Синхронные посты</h2>
      <Posts />
       </div>
       <div className="col">
         <h2>Асинхронные посты</h2>
       <FetchedPosts  />
       </div>
    </div>
    </div>
  );
}

export default App;
