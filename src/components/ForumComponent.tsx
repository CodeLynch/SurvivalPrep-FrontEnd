import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { forumIdReducer } from '../features/ForumSlice';
import { RootState } from '../store';
import './containerStyles.css';
import { DeleteIcon, EditIcon } from './icons';

export type ForumType = {
    forumId: number,
    forumTitle: string,
    forumDesc: string,
}
export default function ForumComp(props:ForumType){
    const adminState = useSelector((store:RootState) => store.login.isAdmin);
    const dispatch = useDispatch();

    return(
    <div className='SecondaryContainer px-3 py-2 m-1' style={{width:"99%", maxHeight:"20vh"}}>
        <div className="d-flex flex-row">
            <Link to="/threads" state={{title: props.forumTitle}} className="linksColor" style={{width:"100%"}}
            onClick={()=>{dispatch(forumIdReducer(props.forumId))}}><h1 className="m-0">{props.forumTitle}</h1></Link>
            {
                adminState?
                <>
                    <Link to="#" className="linksColor"
                    onClick={()=>{}}><EditIcon /></Link>
                    <Link to="#" className="linksColor"
                    onClick={()=>{}}><DeleteIcon /></Link>  
                </>:
                <>
                </>
            }
        </div>
        
        <p className="m-0 px-1">{props.forumDesc}</p>
    </div>
    );
}