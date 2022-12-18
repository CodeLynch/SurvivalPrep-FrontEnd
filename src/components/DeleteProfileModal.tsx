import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { deleteProfileReducer, logoutReducer, userIdReducer } from "../features/LogInSlice";
import UserService from "../services/UserService";
import { communityIdReducer } from "../features/ForumSlice";
import { familyIdReducer } from "../features/FamilySlice";

function DeleteProfileModal() {
    const showState = useSelector((store:RootState) => store.login.showDeleteProfile);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {profileid} = useParams();
    const [isLoading, setLoading] = useState(false);

    const deleteAccount = () => {
        setLoading(true);
        UserService.deleteUser(Number(profileid)).then((res)=>{
            dispatch(userIdReducer(0));
            dispatch(communityIdReducer(0));
            dispatch(familyIdReducer(0));
            dispatch(logoutReducer());
            setLoading(false);
            alert("Account deleted successfully!");
            dispatch(deleteProfileReducer());
            nav('/');
        }
        )
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(deleteProfileReducer())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Delete Account</Modal.Title>
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
                <p>Are you sure you want to delete your account?</p>
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(deleteProfileReducer()); nav('/profile')}}>
                        Close
                    </Button>
                    <Button variant="danger" disabled={isLoading} onClick={()=>{deleteAccount(); }}>
                        Delete
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default DeleteProfileModal;