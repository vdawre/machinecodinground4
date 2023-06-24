import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageWrapper />} />
        <Route path='/:postId' element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
