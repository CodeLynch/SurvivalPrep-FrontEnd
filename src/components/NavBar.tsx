import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
  return (
    <div className="d-flex flex-row" style={{color:"white"}}>
      <div>
        <Nav className='NavBar p-2 d-flex align-items-center' style={{height:"10vh", width:"20vw"}}>
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
       <div>
        <Nav className='NavBar justify-content-end d-flex align-items-center' style={{height:"10vh",width:"80vw", color:"white"}}>
          <Nav.Item>
            <Nav.Link className="LinksColor">Forums</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="LinksColor" eventKey="">Family</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="LinksColor" eventKey="">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="LinksColor" eventKey="">Emergency</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="LinksColor" eventKey="">Tips</Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
    </div>
  );
}

export default NavBar;