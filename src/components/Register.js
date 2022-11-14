
import './containerStyles.css';
import Form from 'react-bootstrap/Form';

function Register() {
  return (
    <div className='container'>
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-10 py-10 MainContainer'> 
            <h1>Registration</h1>
            <Form.Control
            type="text"
            id="inputText"
            placeholder='10'
            />
            <Form.Control
            type="text"
            id="inputText"
            placeholder='10'
            />
            <Form.Control
            type="text"
            id="inputText"
            placeholder='10'
            />
            <Form.Control
            type="text"
            id="inputText"
            placeholder='10'
            />
            <Form.Control
            type="text"
            id="inputText"
            placeholder='10'
            />
            </div>

        </div>
    </div>
  );
}

export default Register;