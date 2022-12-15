import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleEditThread } from "../features/ForumSlice";
import ThreadService from "../services/ThreadService";
import PostService from "../services/PostService";

function UpdateThreadModal() {
    const showState = useSelector((store:RootState) => store.forum.showEditThread);
    const [ThreadTitle, setTitle] = useState('');
    const [firstPost, setFirst] = useState('');
    const [firstPostId, setFirstId] = useState(0);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loc = useLocation();
    const {threadid} = useParams();
    const [isLoading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        ThreadService.getThread(Number(threadid)).then((res) =>{
            setTitle(res.threadtitle);
            PostService.getThreadPosts(Number(threadid)).then((resp)=>{
                setFirst(resp[0].postcontent);
                setFirstId(resp[0].postid);
                setLoading(false);
            })
        })
    },[])

    const editThread = () => {
        if(ThreadTitle === '' || firstPost === ''){
            alert("Please fill out both of the text fields")
        }else{
            setLoading(true);
            ThreadService.putThreadtitle(Number(threadid), ThreadTitle).then((res)=>{
                PostService.putPost(firstPostId, firstPost).then((res)=>{
                    setLoading(false);
                    alert("Thread updated successfully!");
                    dispatch(toggleEditThread());
                    nav('/posts', {state:{title: loc.state.title}})
                })
        })
        }
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleEditThread())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Edit Thread</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {
                isLoading?
                <>
                    <div className='d-flex justify-content-center'>
                        <img className='App-logo' src={require('../spinner/AppLogoSymbol.png')} alt='spinner'/>
                    </div>
                </>:
                <>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="ThreadTitle"
                    placeholder='Thread Title'
                    value={ThreadTitle}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    as="textarea" rows={3}
                    id="firstPost"
                    value={firstPost}
                    placeholder='Write the first post...'
                    onChange={(e)=>{setFirst(e.target.value)}}
                    />
                </Form.Group>    
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleEditThread()); nav('/posts', {state:{title: loc.state.title}})}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{editThread();}}>
                        Edit
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default UpdateThreadModal;