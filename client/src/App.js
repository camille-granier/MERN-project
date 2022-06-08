import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/profile" element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
