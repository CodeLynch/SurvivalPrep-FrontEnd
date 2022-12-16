import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleEditPost, toggleEditThread } from "../features/ForumSlice";
import ThreadService from "../services/ThreadService";
import PostService from "../services/PostService";

function UpdatePostModal() {
    const showState = useSelector((store:RootState) => store.forum.showEditPost);
    const [Post, setPost] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loc = useLocation();
    const {postid} = useParams();
    const [isLoading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        PostService.getPost(Number(postid)).then((res) =>{
            setPost(res.postcontent);
            setLoading(false);
        }).catch((err)=>{
            alert("error in fetching post");
            console.log(err);
        })
    },[])

    const editPost = () => {
        if(Post === ''){
            alert("Please fill out the text field")
        }else{
            setLoading(true);
            PostService.putPost(Number(postid), Post).then((res)=>{
                alert("Post updated successfully!");
                dispatch(toggleEditPost());
                nav("/posts")
                window.location.reload();
            }).catch((err)=>{
                alert("error in updating post");
                console.log(err);
            })
        }
    }
        
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleEditPost())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Edit Post</Modal.Title>
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
                    as="textarea" rows={3}
                    id="Post"
                    value={Post}
                    placeholder='Write your reply...'
                    onChange={(e)=>{setPost(e.target.value)}}
                    />
                </Form.Group>    
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleEditPost()); nav('/posts')}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{editPost();}}>
                        Edit
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default UpdatePostModal;