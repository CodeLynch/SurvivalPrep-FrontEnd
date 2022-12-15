import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleEditPost } from '../features/ForumSlice';
import { toggleRemovePost } from '../features/PostSlice';
import { RootState } from '../store';
import './containerStyles.css';
import { DeleteIcon, EditIcon } from './icons';

export type PostType = {
    postId: number,
    postContent: string,
    postCreator: string,
    postCreatorId: number,
    postDatetime: string,
}
export default function PostComp(props:PostType){
    const userIdState = useSelector((store:RootState)=> store.login.userId);
    const adminState = useSelector((store:RootState)=> store.login.isAdmin);
    const dispatch = useDispatch();

    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }

    useEffect(()=>{
        console.log(userIdState, Number(props.postCreator))
    },[]);

    return(
    <div className='SecondaryContainer px-3 py-2 m-1' style={{width:"99%", maxHeight:"20vh"}}>
        <div className="d-flex flex-row">
            <div>
                <img className="imgFixedSize mx-2" src='profileIcon.png' alt="profile icon"></img>
            </div>
            <div className='w-100'>
                <div className="d-flex flex-row w-100">
                    <strong><p className='m-0'>{props.postCreator}</p></strong>
                    <div className="d-flex w-100 justify-content-end">
                        {
                        userIdState === props.postCreatorId?    
                        <Link to={"editPost/" + props.postId} className="linksColor d-flex align-items-center"
                        onClick={()=>{dispatch(toggleEditPost())}}><EditIcon /></Link>
                        :<></>
                        }
                        {
                        adminState || userIdState === props.postCreatorId? 
                         <Link to={"removePost/" + props.postId}className="linksColor d-flex align-items-center"
                        onClick={()=>{dispatch(toggleRemovePost())}}><DeleteIcon /></Link>:
                        <></>  
                        }
                         
                    </div>
                    
                </div>
                
                <p className='m-0' style={{fontSize:"12px"}}>{formatDateTime(props.postDatetime)}</p>
                <p className='m-0' >{props.postContent}</p>
            </div>    
        </div>
    </div>
    );
}