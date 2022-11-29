import './containerStyles.css';
import Button from 'react-bootstrap/Button';
import ForumComp, { ForumType } from './ForumComponent';
import { useState } from 'react';

export default function ForumsPage(){
    const [ForumsArr, setForumArr] = useState<ForumType[]>([
        {forumTitle: "Announcements", forumDesc:"Find out what's happening in your community..." },
        {forumTitle: "Issues and Concerns", forumDesc:"Voice out your concerns and problems." },
        {forumTitle: "Lounge", forumDesc:"Random talks and discussions." },
        {forumTitle: "New Forum", forumDesc:"Another Forum" },
      ])
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
