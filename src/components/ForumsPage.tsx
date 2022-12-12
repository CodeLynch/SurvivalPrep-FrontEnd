import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';

export default function ForumsPage(){
    const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
    const communityState = useSelector((store:RootState)=> store.forum.communityid)
    const [ForumsArr, setForumArr] = useState<ForumType[]>([])
    const [isLoading, setLoading] = useState(false);
    const nav = useNavigate();

    useEffect(()=>{
        setLoading(true);
        ForumService.getCommunityForums(communityState).then((res)=>{
            setLoading(false);
            let arr = [...res];
            arr.map((forum, i) =>{
                    return(
                        arr[i] = ({
                            forumId: forum.forumid,
                            forumTitle: forum.forumtitle,
                            forumDesc: forum.forumdesc,
                        }
                        )
                    )
            })
            setForumArr(arr);
        })
        
    },[]);
    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>Forums</strong></h1>
        <div className='MainContainer p-3' style={{height:"auto", minHeight:"75vh", minWidth:"100%"}}>
            {
                isLoading?
                <>
                    <div className='d-flex justify-content-center'>
                        <img className='App-logo' src='AppLogoSymbol.png' alt='spinner'/>
                    </div>
                </>
                :
                ForumsArr.length !== 0 ?
                ForumsArr.map((forum, i) =>
                <ForumComp forumId={forum.forumId} forumTitle={forum.forumTitle} forumDesc={forum.forumDesc} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no forums yet.</p>
            }
        </div>
    </div>
    );
}
