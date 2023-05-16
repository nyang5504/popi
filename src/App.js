import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AlbumDashboard from './pages/AlbumDashboard';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/albumdashboard">album dashboard</Link>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/albumdashboard' element={<AlbumDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
