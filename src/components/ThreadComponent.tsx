import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { threadIdReducer } from '../features/ForumSlice';
import './containerStyles.css';
import { CommentsIcon } from './icons';

export type ThreadType = {
    threadId: number,
    threadTitle: string,
    threadCreator: string,
    threadDatetime: string,
}
export default function ThreadComp(props:ThreadType){

    const dispatch = useDispatch();

    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }

    return(
    <div className='SecondaryContainer px-3 py-2 m-1' style={{width:"99%", maxHeight:"20vh"}}>
        <div className='d-flex flex-column'>
            <p className="m-0" style={{fontSize:"14px"}}>{formatDateTime(props.threadDatetime)}</p>
            <div className='d-flex flex-row'>
                <div className='d-flex w-100 flex-column'>
                    <Link to="/posts" state={{title: props.threadTitle}} className="linksColor w-100" onClick={()=>{dispatch(threadIdReducer(props.threadId))}}><h1 className="m-0">{props.threadTitle}</h1></Link>
                    <Link to="/posts" state={{title: props.threadTitle}} className="linksColor d-flex flex-row" onClick={()=>{dispatch(threadIdReducer(props.threadId))}}>
                        <CommentsIcon/>
                        <p className="m-0">0</p>
                    </Link>
                    
                </div>
                <div className='d-flex w-100 justify-content-end'>
                    <div className='d-flex flex-column mx-2 justify-content-center' style={{width:"7vw"}}>
                        <img className="imgFixedSize mx-4" src='profileIcon.png' alt="profile icon"></img>   
                        <p className="m-0 px-2 text-center">{props.threadCreator}</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    );
}