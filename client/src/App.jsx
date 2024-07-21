import {Routes, Route} from 'react-router-dom';
import HomePage from "./assets/pages/HomePage";
import TrailerPage from './assets/pages/TrailerPage';
import Header from './assets/components/Header';
import ReviewPage from './assets/pages/ReviewPage';


function App() {

  return (
    <div className='overflow-hidden'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trailer/:trailerId' element={<TrailerPage />} />
        <Route path='/reviews/:movieId' element={<ReviewPage />} />
      </Routes>
    
    </div>
  )
}

export default App
