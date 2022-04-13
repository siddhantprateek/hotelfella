import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Explore, Review, Tour } from './routes' 
import { Header, HeaderDark } from './components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
        <Route path="/tour" element={<Tour/>}/>
      </Routes>
    </div>
  );
}

export default App;
