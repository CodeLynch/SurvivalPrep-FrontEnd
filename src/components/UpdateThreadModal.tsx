import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleEditForum, toggleEditThread } from "../features/ForumSlice";
import ForumService from "../services/ForumService";

function UpdateThreadModal() {
    const showState = useSelector((store:RootState) => store.forum.showEditThread);
    const [ThreadTitle, setTitle] = useState('');
    const [firstPost, setFirst] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loc = useLocation();
    const {threadId} = useParams();
    const [isLoading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        // ForumService.getForumById(Number(forumId)).then((res) =>{
        //     setTitle(res.Threadtitle);
        //     setDesc(res.firstPost);
        //     setLoading(false);
        // })
    },[])

    const editForum = () => {
        if(ThreadTitle === '' || firstPost === ''){
            alert("Please fill out both of the text fields")
        }else{
            setLoading(true);
        //     ForumService.putForum(Number(forumId), ThreadTitle, firstPost).then((res)=>{
        //     setLoading(false);
        //     alert("Forum updated successfully!")
        // })
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
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleEditForum()); nav('/threads', {state:{title: loc.state.title}})}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{editForum(); dispatch(toggleEditThread());}}>
                        Edit
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default UpdateThreadModal;