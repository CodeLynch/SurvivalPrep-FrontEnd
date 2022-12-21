import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleAddForum } from "../features/ForumSlice";
import ForumService from "../services/ForumService";

function AddForumModal() {
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const communityIdState = useSelector((store:RootState) => store.forum.communityid);
    const showState = useSelector((store:RootState) => store.forum.showAddForum);
    const [forumTitle, setTitle] = useState('');
    const [forumDesc, setDesc] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const createForum = () => {
        if(forumTitle === '' || forumDesc === ''){
            alert("Please fill out both of the text fields")
        }else{
            setLoading(true);
            ForumService.postForum(forumTitle, forumDesc, communityIdState, userIdState)
        .then((res)=>{
            setLoading(false);
            // alert("Forum created successfully!")
            dispatch(toggleAddForum());
            nav("/forums")
            window.location.reload();
            
        })
        }
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleAddForum())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Create Forum</Modal.Title>
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
                    id="forumTitle"
                    placeholder='Forum Title'
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="forumDesc"
                    placeholder='Forum Description'
                    onChange={(e)=>{setDesc(e.target.value)}}
                    />
                </Form.Group>   
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleAddForum()); nav('/forums')}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{createForum();}}>
                        Create
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default AddForumModal;