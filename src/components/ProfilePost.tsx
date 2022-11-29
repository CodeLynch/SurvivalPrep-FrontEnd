import './containerStyles.css';

export type ForumType = {
    threadTitle: string,
    post: string,
    date: string,
    time: string,
}
export default function ProfilePost(props:ForumType){
    return(
    <div className='MainContainer px-3 py-2 m-1' style={{width:"99%", height:"20vh"}}>
        <h1 className="m-0">{props.threadTitle}</h1>
        <p className="m-0 px-1">{props.post}</p>
    </div>
    );
}