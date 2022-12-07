import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import './containerStyles.css';

export type inviteMemberType = {
    inviteid: number,
    inviteeFirstname: string,
    inviteeLastname: string,
    familyName: string,
    datetime: string,
}
export default function MemberInvite(props: inviteMemberType) {
  return (
    <div>
       <div className="SecondaryContainer m-1">
        <div className='d-flex flex-row'>
          <div className='d-flex justify-content-center align-items-center p-2'>
            <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
          </div>
          <div className='d-flex flex-column p-2' style={{width: "15vw"}}>
            <div className='d-flex flex-row m-0 p-0 w-100 h-100'>
              <p className="m-0">{props.inviteeFirstname} {props.inviteeLastname} invites you to {props.familyName}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}