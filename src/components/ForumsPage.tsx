import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

export default function ForumsPage(){
    const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
    const [ForumsArr, setForumArr] = useState<ForumType[]>([
        {forumTitle: "Announcements", forumDesc:"Find out what's happening in your community..." },
        {forumTitle: "Issues and Concerns", forumDesc:"Voice out your concerns and problems." },
        {forumTitle: "Lounge", forumDesc:"Random talks and discussions." },
        {forumTitle: "New Forum", forumDesc:"Another Forum" },
      ])
    const nav = useNavigate();

    useEffect(()=>{
        if(!loginState){
            console.log(setForumArr)
            nav('/');
        }
    },[loginState, nav]);
    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>Forums</strong></h1>
        <div className='MainContainer p-3' style={{height:"auto", minHeight:"75vh", minWidth:"100%"}}>
            {
                ForumsArr.length !== 0 ?
                ForumsArr.map((forum, i) =>
                <ForumComp forumTitle={forum.forumTitle} forumDesc={forum.forumDesc} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no forums yet.</p>
            }
        </div>
    </div>
    );
}
