import './containerStyles.css'
import ForumComp, { ForumType } from './ForumComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {  Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ForumService from '../services/ForumService';
import PostComp, { PostType } from './PostComponent';
import PostService from '../services/PostService';
import { CommentsIcon, DeleteIcon, EditIcon } from './icons';
import { Form, Button, InputGroup } from 'react-bootstrap';
import UserService from '../services/UserService';
import { useDispatch } from 'react-redux';
import { toggleEditThread } from '../features/ForumSlice';
import ThreadService from '../services/ThreadService';

export default function PostsPage(){
    const userIdState = useSelector((store:RootState)=> store.login.userId)

    const threadState = useSelector((store:RootState)=> store.forum.currentThreadid)
    const [threadTitle, setTitle] = useState('');
    const [PostsArr, setPosts] = useState<PostType[]>([])
    const [firstPost, setFirst] = useState<PostType>();
    const [isLoading, setLoading] = useState(false);
    const [replyInput, setInput] = useState('');
    const [replyCount, setCount] = useState(0);
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);
        ThreadService.getThread(threadState).then((res)=>{
            setTitle(res.threadtitle);
        }).catch((err)=>{
            alert("Error in getting thread data");
            console.log(err);
        })
        PostService.getThreadPosts(threadState).then((res)=>{
            let arr = [...res]
            let count = 0;
            arr.map((post, i)=>{
                count += 1;
            })
            setCount(count-1);
            setFirst({
                postId: res[0].postid,
                postContent: res[0].postcontent,
                postCreator: res[0].creator.username,
                postDatetime: res[0].datetimecreated
            })
        }
        )
        PostService.getThreadPosts(threadState).then((res)=>{
            let arr = [...res]
            arr.shift();
            const promiseArr = arr.map((post, i)=>{
                if(post.creator.username === undefined){
                    return (UserService.getUserDetails(post.creator).then((resp)=>{
                        arr[i] = {
                            postId: arr[i].postid,
                            postContent: arr[i].postcontent,
                            postCreator: resp.username,
                            postDatetime: arr[i].datetimecreated
                        }
                    }))
                }else{
                    return (UserService.getUserDetails(post.creator.userid).then((resp)=>{
                        arr[i] = {
                            postId: arr[i].postid,
                            postContent: arr[i].postcontent,
                            postCreator: resp.username,
                            postDatetime: arr[i].datetimecreated
                        }
                    }))
                }
            })

            Promise.all(promiseArr).then(()=>{
                setPosts(arr);
                setLoading(false);
            }).catch((err)=>{
                console.log(err);
            })
        }
        )
    },[]);

    const createPost = (postContent: string) =>{
        PostService.postThreadPost(postContent, threadState, userIdState).then((res)=>{
            alert("Post successfully created!")
        })
    }
    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }


    return(
    <>
    <Outlet/>
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
                            <h1>{threadTitle}</h1>
                        </div>
                        <div className="d-flex flex-row">
                            <img className="imgFixedSize mx-4" src='profileIcon.png' alt="profile icon"></img>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <p className='m-0'><strong>{firstPost?.postCreator}</strong></p>
                                    <div className="d-flex flex-row align-items-start mx-2">
                                        <Link to={"editThread/" + threadState} className="linksColor d-flex align-items-center"
                                        onClick={()=>{dispatch(toggleEditThread())}}><EditIcon /></Link>
                                        <Link to="#" className="linksColor d-flex align-items-center"
                                        onClick={()=>{}}><DeleteIcon /></Link>
                                    </div>
                                      
                                </div>
                                <p className='m-0'>{firstPost? formatDateTime(firstPost.postDatetime):<></>}</p>  
                                <p>{firstPost?.postContent}</p>  
                                <div className="d-flex flex-row">
                                        <CommentsIcon/>
                                        <p className="m-0">{replyCount}</p>
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
                        onChange={(e)=>{setInput(e.target.value)}}
                      />
                      <Button variant="primary" id="button-addon2" onClick={(e)=>{
                        createPost(replyInput);
                      }}>
                        Post
                      </Button>
                    </InputGroup>
                </div>
                
                {PostsArr.length !== 0 ?
                    PostsArr.map((post, p)=>{
                       return (<PostComp key={p} postId={post.postId} postContent={post.postContent} postCreator={post.postCreator} 
                        postDatetime={post.postDatetime}/>);
                    })
                    :
                    <p className='d-flex justify-content-center'>There are no replies to this thread yet.</p>
                }
                </>    
                
            }
        </div>
    </div>    
    </>
    
    );
}
