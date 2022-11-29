import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import { Button, FormSelect } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import CommunityService from '../services/CommunityService';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

type CommunityType ={
  communityid: number;
  communityname: string;
  address: string;
  deleted: boolean;
}
function Registration() {
  const [communitiesData, setCommunityData] = useState<CommunityType[]>([]);
  const [validated, setValidated] = useState(false);
  const [selectValue, setSelect] = useState(-1);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [contact, setContact] = useState('');
  const nav = useNavigate();
  
  useEffect(()=>{
    CommunityService.getCommunities().then((res) =>{
      setCommunityData(res.data);
    });
  },[])

  const SelectHandler = (e:React.SyntheticEvent<HTMLSelectElement>) =>{
    setSelect(Number(e.currentTarget.value));
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
       register()
    }      
  };

  const register = () => {
    UserService.postUser(fname, lname, uname, email, selectValue, pass, contact).then((res) => {
      if(res !== null){
        nav('/');
      }
    })
  };
  return (
    <div className='container'>
        <div className="d-flex flex-row align-items-center justify-content-center p-2" style={{height:'auto'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50%', height:'auto', maxHeight:'80vh'}}>
                    <h1><strong>REGISTER</strong></h1>
                    <Form noValidate validated={validated} onChange={()=>{setValidated(false)}} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mt-2">
                      <Form.Control
                      required
                      type="text"
                      id="inputText"
                      placeholder='Firstname'
                      onChange={(e)=>{setFname(e.target.value)}}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mt-2" >
                        <Form.Control
                        required
                        type="text"
                        id="inputText"
                        placeholder='Lastname'
                        onChange={(e)=>{setLname(e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className="mt-2" >
                      <Form.Control
                      required
                      type="text"
                      id="inputText"
                      placeholder='Username'
                      onChange={(e)=>{setUname(e.target.value)}}
                      />
                    </Form.Group>

                    <Form.Group className="mt-2" >  
                      <Form.Control
                      required
                      type="text"
                      id="inputText"
                      placeholder='Email'
                      className='mt-2'
                      onChange={(e)=>{setEmail(e.target.value)}}
                      />
                    </Form.Group>

                    <Form.Group className="mt-2" >  
                      <Form.Control
                      required
                      type="password"
                      id="inputText"
                      placeholder='Password'
                      onChange={(e)=>{setPass(e.target.value)}}
                      />
                    </Form.Group>
                      
                    <Form.Group className="mt-2">  
                      <Form.Control
                      required
                      type="text"
                      id="inputText"
                      placeholder='Contact No.'
                      onChange={(e)=>{setContact(e.target.value)}}
                      />
                    </Form.Group>

                      <FormSelect className = 'mt-2' onChange={(e)=>{SelectHandler(e);}} isValid={selectValue > -1}>
                      <option value={0}>Community</option>
                      {communitiesData.map((community,i) =>{
                        return <option value={i + 1} key={i}>{community.communityname}</option>
                      })}
                      </FormSelect>
                    
                      <div className="d-flex justify-content-end p-2">
                      <Button variant="primary" className="mt-3" style={{width:'20vw'}} type="submit">REGISTER</Button>
                      </div>

                    </Form>
            </div>

        </div>
    </div>
  );
}
export default Registration;
