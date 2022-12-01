
import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function LandingPage() {
  return (
    <div className='container d-flex flex-row justify-content-center align-items-center' style={{height:"90vh", width:"100vw"}}>
            <div style={{width:'30vw'}}>
                <h1>Stay <strong>Updated</strong> and <strong>Connected</strong> with your <strong>Family</strong> and <strong>Community.</strong></h1>
                <p>SurvivalPrep allows you to keep track of your family and community</p>
            </div>
            <div className="d-flex justify-content-center" style={{width:'50vw'}}>
                <div style={{width:'90%', height:'90%'}} className='px-4 py-2 MainContainer'>
                    <h1><strong>LOGIN</strong></h1>
                    <Form.Control
                        className='mb-2'
                        type="text"
                        id="formEmail"
                        placeholder='Email'
                    />
                    <Form.Control
                        className='mb-2'
                        type="password"
                        id="formPassword"
                        placeholder='Password'
                    />
                    <a href='/' style={{textDecoration:'none', color:'white'}}><p>Forgot password?</p></a>
                    <div style={{width:'100%'}}>
                    <Button variant="primary" style={{width:'100%'}} className="mb-3">LOGIN</Button>
                    <p className='text-center'>Don't have an account? <Link to='/register'  className="linksColor"><strong>Register Here</strong></Link></p>
                    </div>
                </div>
        </div>
    </div>
  );
}