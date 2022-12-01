import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import { Routes, Route } from "react-router-dom";
import FamilyPage from './components/FamilyPage';
import Profilepage from './components/Profilepage';
import EditProfilepage from './components/EditProfilepage';
import TipsPage from './components/TipsPage';
import ForumsPage from './components/ForumsPage';
import Dashboard from './components/Dashboard';
import AcctProvider, { AcctContext } from './contexts/AccountContext';
import { useContext } from 'react';



export default function App() {
    const acctcontext = useContext(AcctContext);
    return (
      <div className='App'>
        <div className='App-container'>
            <NavBar />
                <Routes>
                  <Route path="/" element={ acctcontext?.currentUserId === 0 ? <LandingPage/> : <Dashboard/>}></Route>
                  <Route path="/register" element={<Registration/>}></Route>
                  <Route path="/forums" element={<ForumsPage/>}></Route>
                  <Route path="/family" element={<FamilyPage/>}></Route>
                  <Route path="/tips" element={<TipsPage/>}></Route>
                  <Route path="/profile" element={<Profilepage/>}></Route>
                  <Route path="/editprofile" element ={<EditProfilepage/>}></Route>
                </Routes>
        </div>
      </div>
    );
  
}
