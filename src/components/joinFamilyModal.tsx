import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { familyIdReducer, toggleCreateFamily, toggleJoinFamily } from "../features/FamilySlice";
import FamilyService from "../services/FamilyService";
import UserService from "../services/UserService";
import { RootState } from "../store";
import "./containerStyles.css";
import './NavBar.css';

function JoinFamilyModal() {
    const showState = useSelector((store:RootState) => store.family.showJoinFamilyModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const [familyFound, setFound] = useState(false);
    const [familyName, setFamilyName] = useState('');
    const [familyIdFound, setFoundId] = useState(0);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loc = useLocation();

    useEffect(()=>{
        FamilyService.getFamily(loc.state.code).then((res)=>{
            if(res === ''){
                setFound(false);
            }else{
                setFound(true);
                setFamilyName(res.familyname);
                setFoundId(res.familyid);
            }
        })
    },[]);
    const JoinFamily = () => {
        UserService.putFamily(userIdState, familyIdFound).then((resp) => {
            // alert("Successfully joined family!")
            dispatch(familyIdReducer(familyIdFound));
            dispatch(toggleJoinFamily());
            nav("/family")
        });
    }

  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleCreateFamily())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Join Family?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {familyFound?
                <p>The code you entered belonged to <strong>{familyName}</strong>,<br/>do you want to join this family?</p>
                :<p>No family found with code entered.</p>
                }
            </Modal.Body>
            <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={()=>{dispatch(toggleJoinFamily()); nav('/family')}}>
                Close
            </Button>
            <Button variant="primary" disabled={!familyFound} onClick={()=>{JoinFamily()}}>
                Join Family
            </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default JoinFamilyModal;
