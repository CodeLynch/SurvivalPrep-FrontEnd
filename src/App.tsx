import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FamilyPage from './components/FamilyPage';
import Profilepage from './components/Profilepage';
import EditProfilepage from './components/EditProfilepage';
import TipsPage from './components/TipsPage';
import ForumsPage from './components/ForumsPage';



export default function App() {
  

    return (
      <div className='App'>
        <div className='App-container'>
          { <Router>
              <Routes>
                <Route path="/" element={<div><NavBar/><LandingPage/></div>}></Route>
                <Route path="/register" element={<div><NavBar/><Registration/></div>}></Route>
                <Route path="/forums" element={<div><NavBar/><ForumsPage/></div>}></Route>
                <Route path="/family" element={<div><NavBar/><FamilyPage/></div>}></Route>
                <Route path="/tips" element={<div><NavBar/><TipsPage/></div>}></Route>
                <Route path="/profile" element={<div><NavBar/><Profilepage/></div>}></Route>
                <Route path="/editprofile" element ={<div><NavBar/><EditProfilepage/></div>}></Route>
                <Route path="/" element ={<div><NavBar/><Profilepage/></div>}></Route>
              </Routes>
          </Router> }
         
        </div>
      </div>
    );
  
}
