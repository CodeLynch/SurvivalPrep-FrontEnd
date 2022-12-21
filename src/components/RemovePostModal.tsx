import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleRemovePost } from "../features/PostSlice";
import PostService from "../services/PostService";

function RemovePostModal() {
    const showState = useSelector((store:RootState) => store.post.showRemovePostModal);
    const {postId} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const Deletepost = (postId: number) => {
        PostService.deletePost(postId).then((res)=>{
            // alert("Post successfully deleted!");
            dispatch(toggleRemovePost())
            nav('/posts');
            window.location.reload();
            
        }).catch((err)=>{
            alert("error in deleting post");
            console.log(err);
        })
    }


  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleRemovePost())}}>
            <Modal.Header className="border-0" style={{color:"white"}}>
            <Modal.Title>Delete Post?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this post?</p>
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={()=>{dispatch(toggleRemovePost()); nav('/posts')}}>
                        No
                    </Button>
                    <Button variant="danger" onClick={()=>{Deletepost(Number(postId)); }}>
                        Yes
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default RemovePostModal;