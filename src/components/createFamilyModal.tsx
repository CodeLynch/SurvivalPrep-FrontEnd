import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { familyIdReducer, toggleCreateFamily } from "../features/FamilySlice";
import FamilyService from "../services/FamilyService";
import UserService from "../services/UserService";
import { RootState } from "../store";
import "./containerStyles.css";
import './NavBar.css';

function CreateFamilyModal() {
    const showState = useSelector((store:RootState) => store.family.showCreateFamilyModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const dispatch = useDispatch();
    const [familyName, setFamilyName] = useState('');
    const nav = useNavigate();

    const createFamily = () => {
        if(familyName !== ""){
            FamilyService.postFamily(familyName, userIdState).then((res) => {
                UserService.putFamily(userIdState, res.familyid).then((resp) => {
                    dispatch(familyIdReducer(res.familyid));
                    dispatch(toggleCreateFamily())
                    nav('/family')
                    window.location.reload();
                });
            })
        }
        
    }

  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleCreateFamily())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Create a Family?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="m-2">
                      <Form.Control
                          required
                          className='mb-2'
                          type="text"
                          id="formFamilyName"
                          placeholder='Family Name'
                          onChange={(e)=>{setFamilyName(e.target.value)}}
                      />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={()=>{dispatch(toggleCreateFamily())}}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                if(familyName !== ""){createFamily()}
                else{
                    alert("Please input a Family Name");
                }
                }}>
                Create Family
            </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default CreateFamilyModal;





