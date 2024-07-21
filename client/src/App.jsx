import {Routes, Route} from 'react-router-dom';
import HomePage from "./assets/pages/HomePage";
import TrailerPage from './assets/pages/TrailerPage';


function App() {

  return (
    <div className='overflow-hidden'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/trailer/:trailerId' element={<TrailerPage />} />
    </Routes>
    
    </div>
  )
}

export default App
