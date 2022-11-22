import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {

    return (
      <div className='App'>
        <div className='App-container'>
          <Router>
              <Routes>
                <Route path="/" element={<div><NavBar/><LandingPage/></div>}></Route>
              </Routes>
              <Routes>
                <Route path="/register" element={<div><NavBar/><Registration/></div>}></Route>
              </Routes>  
          </Router>
        </div>
      </div>
    );
  
}
