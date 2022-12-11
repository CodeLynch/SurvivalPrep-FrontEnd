import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleAddFamilyMember, toggleRemoveMember } from "../features/FamilySlice";
import UserService from "../services/UserService";
import TipsService from "../services/TipsService";
import { toggleRemovePost } from "../features/PostSlice";
import PostService from "../services/PostService";

function RemovePostModal() {
    const showState = useSelector((store:RootState) => store.post.showRemovePostModal);
    //const userIdState = useSelector((store:RootState) => store.login.userId);
    const {postId} = useParams();
    // const [memberFName, setFname] = useState('');
    // const [memberLName, setLname] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();

    // useEffect(()=>{
    //     UserService.getUserDetails(Number(memberid)).then((res)=>{
    //         setFname(res.firstname);
    //         setLname(res.lastname);
    //     })
    // },[memberid])

    const Deletepost = (postId: number) => {
        PostService.deletePost(postId).then((res)=>{
            console.log(res);
            if(res !== null){
                alert("Post successfully deleted!");
            }
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
                    <Button variant="secondary" onClick={()=>{dispatch(toggleRemovePost()); nav('/profile')}}>
                        No
                    </Button>
                    <Button variant="danger" onClick={()=>{Deletepost(Number(postId)); dispatch(toggleRemovePost()); nav('/profile')}}>
                        Yes
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default RemovePostModal;