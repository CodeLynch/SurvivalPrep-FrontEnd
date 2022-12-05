import "./containerStyles.css";
import './NavBar.css';

function ErrorPage() {

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 style={{fontSize: "5em"}}><strong>ERROR 404</strong></h1>
        <p style={{fontSize: "20px"}}>Page not found.</p>
      </div>
    </div>
  );
}
export default ErrorPage;