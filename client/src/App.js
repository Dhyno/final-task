import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import Home from "./pages/Home";
import Bookmark from './pages/Bookmark';
import Header from './components/Header/Header';
import Profile from './pages/Profile';
import DetailJourney from './pages/DetailJourney';
import AddJourney from './pages/AddJourney';

export default function App() {

  const [isLogin, setIslLogin]=useState(true);

  return (
    <div className="bg-home">
      <Router>
        { isLogin && <Header /> }
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/profile" element={ <Profile /> }></Route>
          <Route path="/bookmark" element={ <Bookmark /> }></Route>
          <Route path="/newjourney" element={ <AddJourney /> }></Route>
          <Route path="/detailjourney/:id" element={ <DetailJourney /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}
