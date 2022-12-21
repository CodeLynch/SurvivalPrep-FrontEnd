import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCreatePost } from "../features/PostSlice";
import PostService from "../services/PostService";
import { RootState } from "../store";

function CreatePostModal(){
    const showState = useSelector((store:RootState) => store.post.showCreatePostModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const [postcontent, setPostContent] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    const CreatePost = () => {
        PostService.postPost(postcontent).then((resp) => {
            // alert("Post Added!")
            dispatch(toggleCreatePost())
            window.location.reload();
        });
    }
    return (
        <div className="container">
        <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleCreatePost())}}>
        <Modal.Header className="border-0">
        <Modal.Title>Create Post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <Form.Group className="mb-2">
                <Form.Control
                required
                type="text"
                id="tipcategory"
                placeholder='Tip Category'
                onChange={(e)=>{setTipCategory(e.target.value)}}
                />
            </Form.Group> */}
            <Form.Group className="mb-2">
                <Form.Control
                required
                type="text"
                id="Postcontent"
                placeholder='Tip Content'
                onChange={(e)=>{setPostContent(e.target.value)}}
                />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0">
        <Button variant="secondary"  onClick={()=>{dispatch(toggleCreatePost()); nav('/profile')}}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{CreatePost()}}>
            Create Post
        </Button>
        </Modal.Footer>
        </Modal>
        </div>
);
}
export default CreatePostModal;
