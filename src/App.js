import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/home';
import { Contact } from './pages/Contact/contact';
import { Resume } from './pages/Resume/resume';
import { Portfolio } from './pages/Portfolio/portfolio';

function App() {
  return (
    <div className='Apps'>
      <Routes>
        <Route path='/Home/:id' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Contact/:id' element={<Contact/>} />
        <Route path='/Portfolio/:id' element={<Portfolio/>} />
        <Route path='/Resume/:id' element={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
