import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import { Button, FormSelect } from 'react-bootstrap';

function Registration() {
  return (
    <div className='container'>
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                    <h1>REGISTER</h1>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Firstname'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Lastname'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Username'
                    className='mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Email'
                    className='mt-2'
                    />
                    <FormSelect
                    placeholder='Community'
                    className = 'mt-2'
                    />
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Password'
                    className='mt-2'
                    />
                    <Button variant="primary" className="mt-3">REGISTER</Button>
            </div>

        </div>
    </div>
  );
}
export default Registration;
