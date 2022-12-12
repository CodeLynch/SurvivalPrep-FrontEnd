import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';
import ThreadComp, { ThreadType } from './ThreadComponent';
import { PlusIcon } from './icons';
import ThreadService from '../services/ThreadService';
import UserService from '../services/UserService';

export default function ThreadPage(){
    const forumState = useSelector((store:RootState)=> store.forum.currentForumid)
    const [ThreadsArr, setThreadArr] = useState<ThreadType[]>([])
    const [isLoading, setLoading] = useState(false);
    const nav = useNavigate();
    const loc = useLocation();

    useEffect(()=>{
        ThreadService.getThreadsofForum(forumState).then((res)=>{
            setLoading(true);
            let arr = [...res];
            const promisearr = arr.map((thread, i) =>{
                if(thread.creator.userid === undefined){
                    return(
                        UserService.getUserDetails(thread.creator).then((resp) => {
                            arr[i] ={
                                threadId: arr[i].threadid,
                                threadTitle: arr[i].threadtitle,
                                threadCreator: resp.username,
                                threadDatetime: arr[i].datetimecreated
                            }
                        })
                    );
                }else{
                    return(
                        UserService.getUserDetails(thread.creator.userid).then((resp) => {
                            arr[i] ={
                                threadId: arr[i].threadid,
                                threadTitle: arr[i].threadtitle,
                                threadCreator: resp.username,
                                threadDatetime: arr[i].datetimecreated
                            }
                        })
                    );
                }
            })


            Promise.all(promisearr).then(()=>{
                setThreadArr(arr);
                setLoading(false);
            }).catch((err)=>{
                console.log(err.message);
            })
        })
        
    },[]);
    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>{loc.state.title}</strong></h1>
        <div className='MainContainer p-3' style={{height:"auto", minHeight:"75vh", minWidth:"100%"}}>
            <Link to="addMember" className='linksColor'>
                <div className='d-flex flex-row justify-content-end mx-2 align-items-end'>
                    <PlusIcon/>
                    <p className='mb-0 pr-2' style={{fontSize:"14px"}}>Add a new thread</p>
                </div>
            </Link>
            {
                isLoading?
                <>
                    <div className='d-flex justify-content-center'>
                        <img className='App-logo' src='AppLogoSymbol.png' alt='spinner'/>
                    </div>
                </>
                :
                ThreadsArr.length !== 0 ?
                ThreadsArr.map((thread, i) =>
                <ThreadComp threadId={thread.threadId} threadTitle={thread.threadTitle} threadCreator={thread.threadCreator} 
                 threadDatetime={thread.threadDatetime} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no threads yet.</p>
            }
        </div>
    </div>
    );
}