import { Link } from 'react-router-dom';
import './containerStyles.css';
import { CommentsIcon, DeleteIcon, EditIcon } from './icons';

export type PostType = {
    postId: number,
    postContent: string,
    postCreator: string,
    postDatetime: string,
}
export default function PostComp(props:PostType){

    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }

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
                        <Link to="#" className="linksColor d-flex align-items-center"
                        onClick={()=>{}}><EditIcon /></Link>
                        <Link to="#" className="linksColor d-flex align-items-center"
                        onClick={()=>{}}><DeleteIcon /></Link>   
                    </div>
                    
                </div>
                
                <p className='m-0' style={{fontSize:"12px"}}>{formatDateTime(props.postDatetime)}</p>
                <p className='m-0' >{props.postContent}</p>
            </div>    
        </div>
    </div>
    );
}