import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleDeleteForum } from "../features/ForumSlice";
import ForumService from "../services/ForumService";

function DeleteForumModal() {
    const showState = useSelector((store:RootState) => store.forum.showDeleteForum);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {forumId} = useParams();
    const [isLoading, setLoading] = useState(false);

    const deleteForum = () => {
        setLoading(true);
        ForumService.deleteForum(Number(forumId))
        .then((res)=>{
            setLoading(false);
            // alert("Forum deleted successfully!")
            dispatch(toggleDeleteForum())
            window.location.reload();
        })
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleDeleteForum())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Delete Forum</Modal.Title>
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
                <p>Are you sure you want to delete this forum?</p>
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleDeleteForum()); nav('/forums')}}>
                        Close
                    </Button>
                    <Button variant="danger" disabled={isLoading} onClick={()=>{deleteForum();}}>
                        Delete
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default DeleteForumModal;