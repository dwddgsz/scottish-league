import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/match/:id" element={<div>match</div>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
