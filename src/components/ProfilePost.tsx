import './containerStyles.css';

export type ProfilePostType = {
    threadTitle: string,
    post: string,
    date: string,
    time: string,
}
export default function ProfilePost(props:ProfilePostType){

    return(
    <div className='MainContainer p-3 m-1' style={{width:"99%", minHeight:"20vh"}}>
        <div className='d-flex flex-row'>
            <h1 className="m-0 w-20">{props.threadTitle}</h1>
            <div className="d-flex justify-content-end" style={{width:"80%"}}>
                <div style={{width:'23%'}}>
                <p>{props.date}&nbsp;&nbsp;{props.time}</p>
                </div>
            </div>
        </div>
        <p className="m-0 px-1">{props.post}</p>
    </div>
    );
}