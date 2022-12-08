
import './containerStyles.css';
import { useEffect, useState } from 'react';
import FamilyMember, { familyMemberType } from './FamilyMember';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import UserService from '../services/UserService';
import FamilyService from '../services/FamilyService';
import { creatorIdReducer, familyIdReducer, toggleAddFamilyMember, toggleCreateFamily, toggleJoinFamily } from '../features/FamilySlice';
import { CopyIcon, PlusIcon } from './icons';


export default function FamilyPage() {
  const dispatch = useDispatch()
  const [hasNoFamily, setNoFamily] = useState(false);
  const [FamilyMembers, setFamily]= useState<familyMemberType[]>([])
  const [familyName, setFamilyName] = useState('');
  const [inviteCode, setCode] = useState('');
  const [validated, setValid] = useState(false);
  const [familyCreator, setCreator] = useState(0);
  const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
  const userIdState = useSelector((store:RootState) => store.login.userId)
  const familyIdState = useSelector((store:RootState) => store.family.familyId)
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
        setNoFamily(false);
        setFamilyName(res.family.familyname);
        if(res.family.creator.userid === undefined){
          dispatch(creatorIdReducer(res.family.creator));
          setCreator(res.family.creator);
        }else{
          dispatch(creatorIdReducer(res.family.creator.userid));
          setCreator(res.family.creator.userid);
        }
        dispatch(familyIdReducer(res.family.familyid));
      }
      else{
        setNoFamily(true);
      }
    })
  },[userIdState, familyIdState]);

  useEffect(()=>{
    UserService.getFamilyMembers(familyIdState).then((res)=>{
      let arr = [...res];
      arr.map((member, i) =>{
        if(member.userid === familyCreator){
          return arr[i] = {
            "userid": arr[i].userid,
            "firstname": arr[i].firstname,
            "lastname": arr[i].lastname,
            "contactno": arr[i].contactno,
            "isCreator": true
          };
        }
        else if(member === familyCreator){
          return arr[i] = {
            "userid": arr[0].family.creator.userid,
            "firstname": arr[0].family.creator.firstname,
            "lastname": arr[0].family.creator.lastname,
            "contactno": arr[0].family.creator.contactno,
            "isCreator": true
          };
        }
        return null;
      })
      setFamily(arr);
   })
  },[familyCreator, familyIdState]);

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
    setValid(true);
    if(isValid){
      dispatch(toggleJoinFamily());
      nav('/family/joinFamily', {state:{code:inviteCode}});
    }      
  }

      return (
        <>
        <Outlet />
        <div className='container' style={{height:"auto", minHeight:"90vh"}}>
          <h1><strong>My Family</strong></h1>
          <div className="MainContainer p-3 " style={{minHeight:"75vh", width:"100%", height:'auto'}}>
            {
              //change display depending if user has family members
              hasNoFamily ?  
              <div className='d-flex justify-content-center'>
                <div className="d-flex flex-column align-items-center">
                  <h5>You're currently not a part of any family</h5>
                  <Link to="createFamily" className="linksColor" onClick={() => {
                    dispatch(toggleCreateFamily());
                  }}><h3><strong>Create a Family?</strong></h3></Link>
                  <h5>or</h5>
                  <h3>Join a Family</h3>
                  <Form noValidate validated={validated} onChange={()=>{setValid(false)}} onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter Family Invite Code"
                        aria-label="Invite Code"
                        aria-describedby="basic-addon2"
                        required
                        onChange={(e) => {setCode(e.target.value)}}
                      />
                      <Button variant="primary" id="button-addon2" type="submit">
                      JOIN
                      </Button>
                    </InputGroup>
                  </Form>
               </div>
              </div> 
              :
              <div>
              <div className='d-flex flex-row justify-content-between p-2'>
                <div className='d-flex flex-row'>
                  <h3>{familyName}</h3>
                    <Link to="#" className='linksColor d-flex flex-row align-items-start'>
                      <CopyIcon/>
                      <p className='m-0' style={{fontSize:"8px"}}>Copy Invite Link</p>
                    </Link>
                </div>
                  <Link to="addMember" className='linksColor d-flex flex-row align-items-end'
                  onClick={()=>{dispatch(toggleAddFamilyMember())}}>
                    <PlusIcon/>
                    <p className='m-0' style={{fontSize:"14px"}}>Add Family Member</p>
                  </Link>
              </div>
              <div className='container d-flex justify-content-center' style={{height:"90%"}}>
                  <div className='row d-flex flex-wrap' style={{height:"auto", maxHeight:'100%', width:"100%"}}>
                    {FamilyMembers.map((member, i) => 
                      <div className="col-auto" key={i}>
                      <FamilyMember userid={member.userid}
                                    firstname={member.firstname} 
                                    lastname={member.lastname} 
                                    contactno={member.contactno} 
                                    isCreator={member.isCreator} 
                                    key={i}
                                    />
                      </div>   
                    )
                    }
                  </div>                
              </div>
            </div>
            }
          </div>
        </div>
      </>
      );

}