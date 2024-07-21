import {Routes, Route} from 'react-router-dom';
import HomePage from "./assets/pages/HomePage";


function App() {

  return (
    <div className='overflow-hidden'>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    
    </div>
  )
}

export default App
