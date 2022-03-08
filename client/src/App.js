import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/Home";
import Bookmark from './pages/Bookmark';
import Header from './components/Header';
import Profile from './pages/Profile';
import DetailJourney from './pages/DetailJourney';
import AddJourney from './pages/AddJourney';

export default function App() {
  return (
    <div className="bg-home">
      {/* <Home /> */}
      <Header />
      {/* <Bookmark /> */}
      {/* <Profile /> */}
      {/* <DetailJourney /> */}
      <AddJourney />
    </div>
  );
}
