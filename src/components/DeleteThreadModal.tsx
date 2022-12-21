import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleDeleteThread } from "../features/ForumSlice";
import ThreadService from "../services/ThreadService";
import PostService from "../services/PostService";
import { toggleToggler } from "../features/LogInSlice";

function DeleteThreadModal() {
    const showState = useSelector((store:RootState) => store.forum.showDeleteThread);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {threadId} = useParams();
    const [firstPostId, setFirstId] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const deleteThread = () => {
        setLoading(true);
        PostService.getThreadPosts(Number(threadId)).then((res)=>{
            PostService.deletePost(res[0].postid).then(()=>{
                ThreadService.deleteThread(Number(threadId)).then((res)=>{
                    setLoading(false);
                    // alert("Thread successfully deleted!");
                    dispatch(toggleToggler());
                    dispatch(toggleDeleteThread())
                    nav('/threads')
                    // window.location.reload();
                }).catch((err)=>{
                    alert("error in deleting thread");
                    console.log(err);
                })
            }).catch((err)=>{
                alert("error in deleting first post");
                console.log(err);
            })
        }).catch((err)=>{
            alert("error in fetching first post")
            console.log(err);
        })


    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleDeleteThread())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Delete Thread</Modal.Title>
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
                <p>Are you sure you want to delete this thread?</p>
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleDeleteThread()); nav('/posts')}}>
                        Close
                    </Button>
                    <Button variant="danger" disabled={isLoading} onClick={()=>{deleteThread(); }}>
                        Delete
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default DeleteThreadModal;