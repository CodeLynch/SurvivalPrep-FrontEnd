import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useLocation, useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';
import PostComp, { PostType } from './PostComponent';

export default function PostsPage(){
    const threadState = useSelector((store:RootState)=> store.forum.currentThreadid)
    const [PostsArr, setPosts] = useState<PostType[]>([])
    const [isLoading, setLoading] = useState(false);
    const nav = useNavigate();
    const loc = useLocation();

    useEffect(()=>{
        setLoading(true);
    },[]);


    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>{loc.state.title}</strong></h1>
        <div className='MainContainer p-3' style={{height:"auto", minHeight:"75vh", minWidth:"100%"}}>
            {
                isLoading?
                <>
                    <div className='d-flex justify-content-center'>
                        <img className='App-logo' src='AppLogoSymbol.png' alt='spinner'/>
                    </div>
                </>
                :
                PostsArr.length !== 0 ?
                PostsArr.map((post, i) =>
                <PostComp postId={post.postId} postContent={post.postContent} postCreator={post.postCreator} postDatetime={post.postDatetime} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no replies to this thread yet.</p>
            }
        </div>
    </div>
    );
}
