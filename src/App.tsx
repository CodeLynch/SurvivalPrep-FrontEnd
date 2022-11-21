import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import ForumsPage from './components/ForumsPage';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilepage';




export default function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <NavBar/>
         {/* <LandingPage/>
        <Registration/> */}
        <ProfilePage/>
        {/* <EditProfilePage/> */}
      </div>
    </div>
  );
}
