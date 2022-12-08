import { Button } from 'react-bootstrap';
import './containerStyles.css';

export type inviteMemberType = {
    inviteid: number,
    inviterFirstname: string,
    inviterLastname: string,
    familyName: string,
    datetime: string,
}
export default function MemberInvite(props: inviteMemberType) {
  return (
    <div>
       <div className="SecondaryContainer m-1" style={{height:"200px", width:"200px"}}>
          <div className='d-flex justify-content-center align-items-center pt-2'>
            <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
          </div>
          <div className='d-flex flex-column p-1 h-90' style={{width: "15vw"}}>
            <div className='d-flex justify-content-center flex-row m-0 p-0 w-100 h-45'>
              <p className="m-0 text-center"><strong>{props.inviterFirstname} {props.inviterLastname}</strong> is inviting you to join the <strong>{props.familyName}</strong></p>
            </div>
            <div className='d-flex flex-row p-2 justify-content-between'>
              <Button variant="secondary" size="sm" >Decline</Button>
              <Button variant="primary" size="sm" >Accept</Button>
            </div>
          </div>
      </div> 
    </div>
  );
}