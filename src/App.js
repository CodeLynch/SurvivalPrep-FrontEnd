import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Registration from './components/Registration';


function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <NavBar/>
        {/* <Register/> */}
       <Registration/>
       
      </div>
    </div>
  );
}

export default App;
