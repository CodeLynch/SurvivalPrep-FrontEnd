import './containerStyles.css';
import { Link } from 'react-router-dom';
import { EmergencyIcon, FamilyIcon, ForumIcon, NewsIcon, TipsIcon } from './icons';
import { useState } from 'react';
import MemberInvite, { inviteMemberType } from './MemberInvite';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Dashboard(){
    const [invitesList, setInvites] = useState<inviteMemberType[]>([
        { inviteid: 1, inviteeFirstname: "Jane", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-07T09:46:29" },
        { inviteid: 2, inviteeFirstname: "John", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-08T09:46:29" },
        { inviteid: 1, inviteeFirstname: "Jane", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-07T09:46:29" },
        { inviteid: 2, inviteeFirstname: "John", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-08T09:46:29" },
        { inviteid: 1, inviteeFirstname: "Jane", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-07T09:46:29" },
        { inviteid: 2, inviteeFirstname: "John", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-08T09:46:29" },
        { inviteid: 1, inviteeFirstname: "Jane", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-07T09:46:29" },
        { inviteid: 2, inviteeFirstname: "John", inviteeLastname: "Doe", familyName: "Doe Family", datetime:"2022-12-08T09:46:29" }
    ]);
    const familyIdState = useSelector((store:RootState) => store.family.familyId)

    return(
    <>
        <div className='container' style={{height:"auto", minHeight:"90vh"}}>
            <h1><strong>How can we help you?</strong></h1>
            <div className='MainContainer d-flex justify-content-center p-3'>
                <div className='d-flex flex-row'>
                    <Link to="/forums" className="linkIconText">
                        <div className='p-3 m-2 d-flex flex-column align-items-center'>
                            <ForumIcon/>
                            <h3 className='text-center w-100'>FORUMS</h3>
                        </div>
                    </Link>
                    <Link to="/family" className="linkIconText">
                        <div className='p-3 m-2 d-flex flex-column align-items-center'>
                            <FamilyIcon/>
                            <h3 className='text-center w-100'>FAMILY</h3>
                        </div>
                    </Link>
                    <Link to="/news" className="linkIconText">
                        <div className='p-3 m-2 d-flex flex-column align-items-center'>
                            <NewsIcon/>
                            <h3 className='text-center w-100'>NEWS</h3>
                        </div>
                    </Link>
                    <Link to="/emergency" className="linkIconText">
                        <div className='p-3 m-2 d-flex flex-column align-items-center'>
                            <EmergencyIcon/>
                            <h3 className='text-center w-100'>EMERGENCY</h3>
                        </div>
                    </Link>
                    <Link to="/tips" className="linkIconText">
                        <div className='p-3 m-2 d-flex flex-column align-items-center'>
                            <TipsIcon/>
                            <h3 className='text-center w-100'>TIPS</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                {
                    familyIdState === 0?
                    <>
                    <h1><strong>Family Invites</strong></h1>
                    <div className='row d-flex flex-wrap w-100' style={{height:"auto", maxHeight:'100%'}}>
                        {
                        invitesList.length !== 0 ?
                        invitesList.map((invite, i) =>
                        <div className="col-auto" key={i}>
                        <MemberInvite inviteid={invite.inviteid} inviteeFirstname={invite.inviteeFirstname} inviteeLastname={invite.inviteeLastname}
                        familyName ={invite.familyName} datetime={invite.datetime} key={i}/>
                        </div>
                        )
                        :
                        <p className="text-center">you have no family invites!</p>
                        } 
                    </div>
                    </>
                    :
                    <></>
                }
                
                
             </div>
        </div>
    </>
    );

}