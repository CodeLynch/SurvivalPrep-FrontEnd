
import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserService from '../services/UserService';
import { AcctContext } from '../contexts/AccountContext';



export default function LandingPage() {
    const acctContext = useContext(AcctContext);
    const [validated, setValidated] = useState(false);
    const [emailInput, setEmail] = useState('');
    const [passInput, setPass] = useState('');
    const [alertMsg, setAlert] = useState('');
    const nav = useNavigate();
    const login = () => {
        UserService.Login(emailInput, passInput).then((res) => {
            if(res === "No User Found!" || res === "Incorrect Password!"){
              setAlert(res);
            }else{
              acctContext?.updateUserId(Number(res));
              nav('/');
            }
            
        })
    }

    const handleSubmit = (event:React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        let isValid = false;
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            isValid = false;
          }else{
            isValid = true;
          }
        setValidated(true);
        if(isValid){
           login()
        }      
      };
    
  return (
    <div className='container d-flex flex-row justify-content-center align-items-center' style={{height:"90vh", width:"100vw"}}>
            <div style={{width:'30vw'}}>
                <h1>Stay <strong>Updated</strong> and <strong>Connected</strong> with your <strong>Family</strong> and <strong>Community.</strong></h1>
                <p>SurvivalPrep allows you to keep track of your family and community</p>
            </div>
            <div className="d-flex justify-content-center" style={{width:'50vw'}}>
                <div style={{width:'90%', height:'90%'}} className='px-4 py-2 MainContainer'>
                    <h1><strong>LOGIN</strong></h1>
                    <Form noValidate validated={validated} onChange={()=>{setValidated(false)}} onSubmit={handleSubmit}>
                    { alertMsg !== '' ? <div className='alert alert-danger'>{alertMsg}</div> : <></>}
                    <Form.Group className="mt-2">
                      <Form.Control
                          required
                          className='mb-2'
                          type="text"
                          id="formEmail"
                          placeholder='Email'
                          onChange={(e)=>{setEmail(e.target.value)}}
                      />
                    </Form.Group>
                    <Form.Group className="mt-2">
                      <Form.Control
                          required
                          className='mb-2'
                          type="password"
                          id="formPassword"
                          placeholder='Password'
                          onChange={(e)=>{setPass(e.target.value)}}
                      />
                    </Form.Group>
                    <a href='/' style={{textDecoration:'none', color:'white'}}><p>Forgot password?</p></a>
                    <div style={{width:'100%'}}>
                    <Button variant="primary" style={{width:'100%'}} className="mb-3" type='submit'>LOGIN</Button>
                    <p className='text-center'>Don't have an account? <Link to='/register'  className="linksColor"><strong>Register Here</strong></Link></p>
                    </div>
                    </Form>
                </div>
        </div>
    </div>
  );
}