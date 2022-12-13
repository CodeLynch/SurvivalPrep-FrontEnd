import { Link } from 'react-router-dom';
import './containerStyles.css';
import { CommentsIcon } from './icons';

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
        {/* <div className='d-flex flex-column'>
            <p className="m-0" style={{fontSize:"14px"}}>{formatDateTime(props.threadDatetime)}</p>
            <div className='d-flex flex-row'>
                <div className='d-flex w-100 flex-column'>
                    <Link to="#" state={{title: props.threadTitle}} className="linksColor w-100"><h1 className="m-0">{props.threadTitle}</h1></Link>
                    <Link to="#" state={{title: props.threadTitle}} className="linksColor d-flex flex-row">
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
        </div> */}
    </div>
    );
}