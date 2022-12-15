import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { threadIdReducer } from '../features/ForumSlice';
import './containerStyles.css';

export type ProfilePostType = {
    threadTitle: string,
    threadId: number,
    post: string,
    datetime: string,
}
export default function ProfilePost(props:ProfilePostType){
    const dispatch = useDispatch();

    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }

    return(
    <div className='MainContainer p-3 m-1' style={{width:"99%", minHeight:"20vh"}}>
    <Link to="/posts" className="linksColor" onClick={()=>{dispatch(threadIdReducer(props.threadId))}}> 
        <div className='d-flex flex-row'>
            <h1 className="m-0 w-100">{props.threadTitle}</h1>
            <div style={{width:"80%"}}>
                <div className="d-flex justify-content-end" style={{width:'100%'}}>
                    <p>{formatDateTime(props.datetime)}</p>
                </div>
            </div>
        </div>
        <p className="m-0 px-1">{props.post}</p>
    </Link>
    </div>
    );
}