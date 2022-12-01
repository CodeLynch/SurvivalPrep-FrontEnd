import { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [currentURL, setURL] = useState('');
  const loc = useLocation();

  useEffect(()=>{
    setURL(loc.pathname);
  },[loc])

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
       <div className='flex-fill'>
        <Nav className='NavBar justify-content-end d-flex align-items-center' style={{height:"10vh",width:"100%", color:"white"}}>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/forums" ? " selected" : "")}  to="/forums">Forums</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/family" ? " selected" : "")} to="/family">Family</Link>
          </Nav.Item>
          <Nav.Item>
           <Link className={'mx-3 linksColor' +  (currentURL === "/#" ? " selected" : "")} to="#">News</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/#" ? " selected" : "")} to="/#">Emergency</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={'mx-3 linksColor' +  (currentURL === "/tips" ? " selected" : "")} to="/tips">Tips</Link>
          </Nav.Item>
          <Nav.Item>
              <Link className='mx-3 linksColor' to="/profile">
                <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
              </Link>
          </Nav.Item>
        </Nav>
        </div>
    </div>
  );
}

export default NavBar;