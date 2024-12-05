 import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Cofee, Home } from './Pages';
import './App.css'

function App() {
  return (
    <Router >
      <div id='link'>
        
        <Link to ={'/'}>Home</Link>
        <Link to ={'/cofee'}>Cofee</Link>

      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cofee' element={<Cofee/>}/>


      </Routes>
       
    </Router>
  );
}

export default App;
