
import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function Register() {
  return (
    <div className='container'>
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                    <h1>Registration</h1>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='placeholderText'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='placeholderText'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='placeholderText'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='placeholderText'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='placeholderText'
                    className='mt-2'
                    />
                    <Button variant="primary" className="mt-3">REGISTER</Button>
            </div>

        </div>
    </div>
  );
}

export default Register;