import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import TopScorers from './pages/TopScorers'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/top-scorers" element={<TopScorers/>}></Route>
          <Route path="/match/:id" element={<MatchDetails/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
