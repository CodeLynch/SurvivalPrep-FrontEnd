import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <NavBar/>
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
