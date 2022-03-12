import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import { DataContextProvider } from './context/dataContext';


import Home from "./pages/Home";
import Bookmark from './pages/Bookmark';
import Header from './components/Header/Header';
import Profile from './pages/Profile';
import DetailJourney from './pages/DetailJourney';
import AddJourney from './pages/AddJourney';
import PrivateRoute from './route/PrivateRoute';

import { UserContext } from './context/userContext'

export default function App() {

  const [state, dispatch] = useContext(UserContext)

  return (
    <div className="bg-home" id='home'>
      <DataContextProvider>
        <Router>
        { state.isLogin && <Header /> }
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/detailjourney/:id" element={ <DetailJourney /> }></Route>
            <Route path="/" element={ <PrivateRoute /> } >
              <Route path="/profile" element={ <Profile /> }></Route>
              <Route path="/bookmark" element={ <Bookmark /> }></Route>
              <Route path="/newjourney" element={ <AddJourney /> }></Route>
            </Route>
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}
