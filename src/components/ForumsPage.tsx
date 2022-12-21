import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';
import { PlusIcon } from './icons';
import { useDispatch } from 'react-redux';
import { toggleAddForum } from '../features/ForumSlice';

export default function ForumsPage(){
    const communityState = useSelector((store:RootState)=> store.forum.communityid)
    const adminState = useSelector((store:RootState)=> store.login.isAdmin)
    // const toggler = useSelector((store:RootState)=> store.login.toggler)
    const [ForumsArr, setForumArr] = useState<ForumType[]>([])
    const [isLoading, setLoading] = useState(false);
    //const nav = useNavigate();
    const dispatch = useDispatch();


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
    <>
    <Outlet/>
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
                <>
                {
                adminState?
                <Link to="createForum" className='linksColor' onClick={()=>{dispatch(toggleAddForum())}}>
                <div className='d-flex flex-row justify-content-end mx-2 align-items-end'>
                    <PlusIcon/>
                    <p className='mb-0 pr-2' style={{fontSize:"14px"}}>Create a new Forum</p>
                </div>
                </Link> 
                :<></>
                }
                
                { ForumsArr.length !== 0 ?
                ForumsArr.map((forum, i) =>
                <ForumComp forumId={forum.forumId} forumTitle={forum.forumTitle} forumDesc={forum.forumDesc} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no forums yet.</p>}
                </>
                
            }
        </div>
    </div>
    </>
    );
}
