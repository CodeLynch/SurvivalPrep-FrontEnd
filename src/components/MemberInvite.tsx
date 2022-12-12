import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { familyIdReducer } from '../features/FamilySlice';
import InviteService from '../services/InviteService';
import UserService from '../services/UserService';
import { RootState } from '../store';
import './containerStyles.css';

export type inviteMemberType = {
    inviteid: number,
    inviterFirstname: string,
    inviterLastname: string,
    familyid: number,
    familyName: string,
    datetime: string,
}


export default function MemberInvite(props: inviteMemberType) {
  const userIdState = useSelector((store:RootState) => store.login.userId)
  const dispatch = useDispatch();
  const acceptInvite = (inviteId:number) => {
    InviteService.putInviteAccept(inviteId).then((res) => {
      if(res !== null){
        UserService.putFamily(userIdState, props.familyid).then((resp) => {
          console.log("userservice response", resp);
          dispatch(familyIdReducer(props.familyid));
          alert("Successfully joined family!");
        })
      }
    }
    )
  }

  const rejectInvite = (inviteId:number) => {
    InviteService.deleteInvite(inviteId).then((res)=>{
      if(res !== null){
        alert("Successfully rejected invite!");
      }
    })
  }

  const formatDateTime = (datetime:string) => {
    let d = new Date(datetime);
    return d.toLocaleString();
  }
  
  return (
    <div>
       <div className="SecondaryContainer m-1" style={{height:"180px", width:"200px"}}>
        <p className="m-0 p-2" style={{fontSize:"12px"}}>{formatDateTime(props.datetime)}</p>
          <div className='d-flex justify-content-center align-items-center pt-2' style={{height:"20%"}}>
            <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
          </div>
          <div className='d-flex flex-column p-1' style={{height:"25%"}}>
            <div className='d-flex justify-content-center flex-row m-0 p-0 w-100'>
              <p className="m-0 text-center"><strong>{props.inviterFirstname} {props.inviterLastname}</strong> is inviting you to join the <strong>{props.familyName}</strong></p>
            </div>
          </div>
          <div className='d-flex flex-row p-2 justify-content-between align-items-center' style={{height:"40%"}}>
              <Button variant="secondary" size="sm" onClick={()=>{rejectInvite(props.inviteid)}}>Decline</Button>
              <Button variant="primary" size="sm" onClick={()=>{acceptInvite(props.inviteid)}}>Accept</Button>
          </div>
      </div> 
    </div>
  );
}