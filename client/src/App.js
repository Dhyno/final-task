import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useContext } from 'react'
import { DataContextProvider } from './context/dataContext';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';
import { UserContext, Home, Header, Profile, DetailJourney, AddJourney, PrivateRoute } from './export/exportComponent'
import Bookmark from './pages/Bookmark';

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
