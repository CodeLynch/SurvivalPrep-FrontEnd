import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import UserService from '../services/UserService';
import { RootState } from '../store';
import { ProfileIcon } from './icons';
import './NavBar.css';

function NavBar() {
  const [currentURL, setURL] = useState('');
  const loc = useLocation();
  const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
  const userIdState = useSelector((store:RootState) => store.login.userId)
  const [firstname, setFName] = useState('');
  const [lastname, setLName] = useState('');
  

  useEffect(()=>{
    setURL(loc.pathname);
  },[loc])

  useEffect(() => {
    UserService.getUserDetails(userIdState).then((res)=>{
        setFName(res.firstname);
        setLName(res.lastname);
    })
  },[userIdState]);

  return (
    <div className="d-flex flex-row" style={{color:"white", width:"100%"}}>
      <div className='flex-fill'>
        <Nav className='NavBar p-2 d-flex align-items-center' style={{height:"10vh", width:"100%"}}>
        <Nav.Item>
            <Link className='navbar-brand' to="/">
          <img
              src="/BrandLogo.png"
              width="155"
              height="40"
              className="d-inline-block"
              alt="SurvivalPrep logo"
            />
            </Link>
        </Nav.Item>
        </Nav>
      </div>
      {
        loginState?
        currentURL === "/"?
        <div className='flex-fill'>
          <Nav className='NavBar justify-content-end d-flex align-items-center' style={{height:"10vh",width:"100%", color:"white"}}>
            <Nav.Item>
              <Link className='mx-3 linksColor d-flex flex-row align-items-center' to="/profile">
                  <p className='mt-3 mx-2'>{firstname}&nbsp;{lastname}</p>
                  <ProfileIcon />
              </Link>
            </Nav.Item>
          </Nav>
        </div>
        :
        <div className='flex-fill'>
        <Nav className='NavBar justify-content-end d-flex align-items-center' style={{height:"10vh",width:"100%", color:"white"}}>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/forums" ? " selected" : "")}  to="/forums">Forums</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/family" ? " selected" : "")} to="/family">Family</Link>
          </Nav.Item>
          <Nav.Item>
           <Link className={'mx-3 linksColor' +  (currentURL === "/#" ? " selected" : "")} to="/news">News</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/#" ? " selected" : "")} to="/emergency">Emergency</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/tips" ? " selected" : "")} to="/tips">Tips</Link>
          </Nav.Item>
          <Nav.Item>
              <Link className={'mx-3 linksColor' +  (currentURL === "/profile" ? " selected" : "")} to="/profile">
                <ProfileIcon />
              </Link>
          </Nav.Item>
        </Nav>
        </div>
        :
        <></>
      }
    </div>
  );
}

export default NavBar;