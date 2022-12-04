
import './containerStyles.css';
import { useEffect, useState } from 'react';
import FamilyMember, { familyMemberType } from './FamilyMember';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import UserService from '../services/UserService';
import FamilyService from '../services/FamilyService';
import { familyIdReducer } from '../features/FamilySlice';


export default function FamilyPage() {
  const dispatch = useDispatch()
  const [hasNoFamily, setNoFamily] = useState(false);
  const [FamilyMembers, setFamily]= useState<familyMemberType[]>([])
  const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
  const userIdState = useSelector((store:RootState) => store.login.userId)
  const familyIdState = useSelector((store:RootState) => store.family.familyId)
  const [familyCreator, setCreator] = useState(0);
  const nav = useNavigate()

  useEffect(()=>{
    if(!loginState){
      console.log(setFamily);  
      nav('/');
    }
  },[loginState, nav]);

  useEffect(() => {
    UserService.getUserDetails(userIdState).then((res)=>{
      if(res.family !== null){
        if(res.family.creator.userid === undefined){
          setCreator(res.family.creator);
        }else{

          setCreator(res.family.creator.userid);
        }
        dispatch(familyIdReducer(res.family.familyid));
      }
      else{
        setNoFamily(true);
      }
    })
  },[userIdState]);

  useEffect(()=>{
    UserService.getFamilyMembers(familyIdState).then((res)=>{
      let arr = [...res];
      arr.map((member, i) =>{
        if(member.userid === familyCreator){
          arr[i] = {
            "firstname": arr[i].firstname,
            "lastname": arr[i].lastname,
            "contactno": arr[i].contactno,
            "isCreator": true
          }
        }
      })
      setFamily(arr);
   })
  },[familyCreator, familyIdState]);

      return (
        <div className='container' style={{height:"auto", minHeight:"90vh"}}>
          <h1><strong>My Family</strong></h1>
          <div className="MainContainer p-3 " style={{minHeight:"75vh", width:"100%", height:'auto'}}>
            {
              //change display depending if user has family members
              hasNoFamily ?  
              <div className='d-flex justify-content-center'>
                <div className="d-flex flex-column align-items-center">
                  <h5>You're currently not a part of any family</h5>
                  <h3><strong>Create a Family?</strong></h3>
                  <h5>or</h5>
                  <h3>Join a Family</h3>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter Family Invite Code"
                      aria-label="Invite Code"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                    JOIN
                    </Button>
                  </InputGroup>
               </div>
              </div> 
              :
              <div>
              <div className='d-flex flex-row justify-content-between p-2'>
                <div className='d-flex flex-row'>
                  <h3>Doe Family</h3>
                  <div className='d-flex flex-row align-items-start'>
                    <img src="copy-link.png" alt="copy link icon" style={{height:"10px", width:"10px", margin:"2px"}}/>
                    <p className='m-0' style={{fontSize:"8px"}}>Copy Invite Link</p>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-end'>
                <img src="plus-7-xxl.png" alt="plus icon" style={{height:"15px", width:"15px", margin:"0px 5px 2px 5px"}}/>
                  <p className='m-0' style={{fontSize:"14px"}}>Add Family Member</p>
                </div>
              </div>
              <div className='container d-flex justify-content-center' style={{height:"90%"}}>
                  <div className='row d-flex flex-wrap' style={{height:"auto", maxHeight:'100%', width:"100%"}}>
                    {FamilyMembers.map((member, i) => 
                      <div className="col-auto" key={i}>
                      <FamilyMember firstname={member.firstname} 
                                    lastname={member.lastname} 
                                    contactno={member.contactno} 
                                    isCreator={member.isCreator}  
                                    key={i}/>
                      </div>   
                    )
                    }
                  </div>                
              </div>
            </div>
            }
          </div>
        </div>
      );
}