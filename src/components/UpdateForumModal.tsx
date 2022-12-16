import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleEditForum } from "../features/ForumSlice";
import ForumService from "../services/ForumService";

function UpdateForumModal() {
    const showState = useSelector((store:RootState) => store.forum.showEditForum);
    const [forumTitle, setTitle] = useState('');
    const [forumDesc, setDesc] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {forumId} = useParams();
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        ForumService.getForumById(Number(forumId)).then((res) =>{
            setTitle(res.forumtitle);
            setDesc(res.forumdesc);
            setLoading(false);
        })
    },[])
    const editForum = () => {
        if(forumTitle === '' || forumDesc === ''){
            alert("Please fill out both of the text fields")
        }else{
            setLoading(true);
            ForumService.putForum(Number(forumId), forumTitle, forumDesc).then((res)=>{
            setLoading(false);
            alert("Forum updated successfully!");
            dispatch(toggleEditForum());
            window.location.reload();
        })
        }
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleEditForum())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Edit Forum</Modal.Title>
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
                    value={forumTitle}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="forumDesc"
                    value={forumDesc}
                    placeholder='Forum Description'
                    onChange={(e)=>{setDesc(e.target.value)}}
                    />
                </Form.Group>   
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleEditForum()); nav('/forums')}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{editForum();}}>
                        Edit
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default UpdateForumModal;