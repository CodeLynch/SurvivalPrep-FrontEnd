import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';
import PostComp, { PostType } from './PostComponent';
import PostService from '../services/PostService';
import { CommentsIcon, DeleteIcon, EditIcon } from './icons';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function PostsPage(){
    const threadState = useSelector((store:RootState)=> store.forum.currentThreadid)
    const [PostsArr, setPosts] = useState<PostType[]>([])
    const [firstPost, setFirst] = useState<PostType>();
    const [isLoading, setLoading] = useState(false);
    const nav = useNavigate();
    const loc = useLocation();

    useEffect(()=>{
        setLoading(true);
        PostService.getThreadPosts(threadState).then((res)=>{
            setFirst({
                postId: res[0].postid,
                postContent: res[0].postcontent,
                postCreator: res[0].creator.username,
                postDatetime: res[0].datetimecreated
            })
            setLoading(false);
        }
        )
    },[]);

    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }


    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <div className='MainContainer p-3' style={{height:"auto", minHeight:"75vh", minWidth:"100%", marginTop:"50px"}}>
            {
                isLoading?
                <>
                    <div className='d-flex justify-content-center'>
                        <img className='App-logo' src='AppLogoSymbol.png' alt='spinner'/>
                    </div>
                </>
                :
                <>
                <div className="SecondaryContainer p-3" style={{minWidth:"100%"}}>
                    <div>
                        <div>
                            <h1>{loc.state.title}</h1>
                        </div>
                        <div className="d-flex flex-row">
                            <img className="imgFixedSize mx-4" src='profileIcon.png' alt="profile icon"></img>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <p className='m-0'>{firstPost?.postCreator}</p>
                                    <div className="d-flex flex-row align-items-start mx-2">
                                        <Link to="#" className="linksColor d-flex align-items-center"
                                        onClick={()=>{}}><EditIcon /></Link>
                                        <Link to="#" className="linksColor d-flex align-items-center"
                                        onClick={()=>{}}><DeleteIcon /></Link>
                                    </div>
                                      
                                </div>
                                <p className='m-0'>{firstPost? formatDateTime(firstPost.postDatetime):<></>}</p>  
                                <p>{firstPost?.postContent}</p>  
                                <div className="d-flex flex-row">
                                        <CommentsIcon/>
                                        <p className="m-0">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-2">                
                    <InputGroup className="mb-3" style={{width:"50%"}}>
                      <Form.Control
                        placeholder="Post a reply..."
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="primary" id="button-addon2">
                        Post
                      </Button>
                    </InputGroup>
                </div>
                </>    

                /* PostsArr.length !== 0 ?
                PostsArr.map((post, i) =>
                <PostComp postId={post.postId} postContent={post.postContent} postCreator={post.postCreator} postDatetime={post.postDatetime} key={i}/>
                )
                :
                <p className='d-flex justify-content-center'>There are no replies to this thread yet.</p>
                */
                
            }
        </div>
    </div>
    );
}
