import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleAddFamilyMember, toggleRemoveMember } from "../features/FamilySlice";
import UserService from "../services/UserService";
import InviteService from "../services/InviteService";

function RemoveMemberModal() {
    const showState = useSelector((store:RootState) => store.family.showRemoveMemberModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const {memberid} = useParams();
    const [memberFName, setFname] = useState('');
    const [memberLName, setLname] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(()=>{
        UserService.getUserDetails(Number(memberid)).then((res)=>{
            setFname(res.firstname);
            setLname(res.lastname);
        })
    },[])


  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleAddFamilyMember())}}>
            <Modal.Header className="border-0" style={{color:"white"}}>
            <Modal.Title>Remove Family Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    userIdState === Number(memberid) ?
                    <p>Remove yourself from this family?</p>
                    :
                    <p>Remove <strong>{memberFName} {memberLName}</strong> from your family?</p>
                }
                
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={()=>{dispatch(toggleRemoveMember()); nav('/family')}}>
                        No
                    </Button>
                    <Button variant="danger" onClick={()=>{dispatch(toggleRemoveMember()); nav('/family')}}>
                        Yes
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default RemoveMemberModal;