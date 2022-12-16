import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleAddThread } from "../features/ForumSlice";
import ForumService from "../services/ForumService";
import ThreadService from "../services/ThreadService";
import PostService from "../services/PostService";

function AddThreadModal() {
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const forumState = useSelector((store:RootState) => store.forum.currentForumid);
    const showState = useSelector((store:RootState) => store.forum.showAddThread);
    const [ThreadTitle, setTitle] = useState('');
    const [firstPost, setDesc] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const createThread = () => {
        if(ThreadTitle === '' || firstPost === ''){
            alert("Please fill out both of the text fields")
        }else{
            setLoading(true);
            ThreadService.postThread(ThreadTitle, forumState, userIdState)
            .then((res)=>{
                console.log("res in Modal", res);
                PostService.postThreadPost(firstPost, res.threadid, userIdState)
                .then((res)=>{
                    alert("Thread created successfully!");
                    dispatch(toggleAddThread());
                    nav('/threads')
                    window.location.reload();
                    
                }).catch((err)=>{
                    alert("Error in posting the first post!")
                    console.log(err);
                    dispatch(toggleAddThread())
                    nav('/threads')
                    
                })
            }).catch((err)=>{
                alert("Error in posting thread!")
                console.log(err);
                
            })
        }
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleAddThread())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Create Thread</Modal.Title>
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
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    as="textarea" rows={3}
                    id="firstPost"
                    placeholder='Write the first post...'
                    onChange={(e)=>{setDesc(e.target.value)}}
                    />
                </Form.Group>   
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleAddThread()) }}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{createThread()}}>
                        Create
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default AddThreadModal;