import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Explore, Review } from './routes' 
import { Header, HeaderDark } from './components';

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="App">
      {location.pathname === "/" ? <Header/> : <HeaderDark/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/hotel/review" element={<Review/>}/>
      </Routes>
    </div>
  );
}

export default App;
