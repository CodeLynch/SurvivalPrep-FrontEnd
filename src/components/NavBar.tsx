import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
  return (
    <div className="d-flex flex-row" style={{color:"white", width:"100%"}}>
      <div className='flex-fill'>
        <Nav className='NavBar p-2 d-flex align-items-center' style={{height:"10vh", width:"100%"}}>
        <Nav.Item>
          <NavLink className='navbar-brand' href='/'>
          <img
              src="/BrandLogo.png"
              width="155"
              height="40"
              className="d-inline-block"
              alt="SurvivalPrep logo"
            />
          </NavLink>
        </Nav.Item>
        </Nav>
      </div>
       <div className='flex-fill'>
        <Nav className='NavBar justify-content-end d-flex align-items-center' style={{height:"10vh",width:"100%", color:"white"}}>
          <Nav.Item>
            <Nav.Link className='linksColor'  eventKey="" href='/forums'>Forums</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='linksColor' eventKey="" href='/family'>Family</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='linksColor'  eventKey="">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='linksColor'  eventKey="">Emergency</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='linksColor'  eventKey="" href='/tips'>Tips</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="" href='/profile'>
              <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
    </div>
  );
}

export default NavBar;