import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import { Button, FormSelect } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CommunityService from '../services/CommunityService';

type CommunityType ={
  communityid: number;
  communityname: string;
  address: string;
  deleted: boolean;
}
function Registration() {
  const [communitiesData, setCommunityData] = useState<CommunityType[]>([]);
  useEffect(()=>{
    CommunityService.getCommunities().then((res) =>{
      setCommunityData(res.data);
    });
  },[])

  return (
    <div className='container'>
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                    <h1><strong>REGISTER</strong></h1>
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
                    <FormSelect className = 'mt-2'>
                    <option>Community</option>
                    {communitiesData.map((community,i) =>{
                      return <option value={i} key={i}>{community.communityname}</option>
                    })}
                    </FormSelect>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Password'
                    className='mt-2'
                    />
                    <div className="d-flex justify-content-end p-2">
                    <Button variant="primary" className="mt-3" style={{width:'20vw'}}>REGISTER</Button>
                    </div>
            </div>

        </div>
    </div>
  );
}
export default Registration;
