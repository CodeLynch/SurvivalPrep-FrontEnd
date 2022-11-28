import './containerStyles.css';
import Button from 'react-bootstrap/Button';

export type ForumType = {
    forumTitle: string,
    forumDesc: string,
}
export default function ForumComp(props:ForumType){
    return(
    <div className='SecondaryContainer px-3 py-2 m-1' style={{width:"99%", maxHeight:"20vh"}}>
        <h1 className="m-0">{props.forumTitle}</h1>
        <p className="m-0 px-1">{props.forumDesc}</p>
    </div>
    );
}