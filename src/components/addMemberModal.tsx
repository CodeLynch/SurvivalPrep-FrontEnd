import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleAddFamilyMember } from "../features/FamilySlice";
import UserService from "../services/UserService";
import InviteService from "../services/InviteService";
import { toggleToggler } from "../features/LogInSlice";

function AddMemberModal() {
    const showState = useSelector((store:RootState) => store.family.showAddFamilyMemberModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const familyIdState = useSelector((store:RootState) => store.family.familyId);
    const [userFound, setFound] = useState(false);
    const [searched, setSearched] = useState(false);
    const [contactNo, setNo] = useState('');
    const [userIdFound, setFoundId] = useState(0);
    const [inviteeFName, setFname] = useState('');
    const [inviteeLName, setLname] = useState('');
    const [isSearching, setSearching] = useState(false);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const searchUser = (contactNo:string) => {
        setSearching(true)
        UserService.getUserDetailsByContactNo(contactNo).then((res) => {
            setSearching(false);
            setSearched(true);
            if(res !== ''){
                setFound(true);
                setFoundId(res.userid);
                setFname(res.firstname);
                setLname(res.lastname);
            }else{
             setFound(false);   
            }
        })
    }

    const inviteUser = (userid: number) => {
        InviteService.postInvite(familyIdState, userid, userIdState).then((res)=>{
            if(res !== null){
                alert("Invite successfully sent!");
                dispatch(toggleAddFamilyMember())
                nav("/family");
            }
        });
    }

  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleAddFamilyMember())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Add Family Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isSearching?
                <>
                <div className='d-flex justify-content-center'>
                    <img className='App-logo' src={require('../spinner/AppLogoSymbol.png')} alt='spinner'/>
                </div>
                </>:
                !searched?
                <>
                <p>Enter the contact number of the member you want to add:</p>
                <Form.Group className="m-2">
                      <Form.Control
                          required
                          className='mb-2'
                          type="text"
                          id="formContactNo"
                          placeholder='Contact No'
                          onChange={(e)=>{setNo(e.target.value)}}
                      />
                </Form.Group>
                </>
                :userFound?
                    <p>Invite {inviteeFName} {inviteeLName} to your family?</p>
                    :
                    <p>No User Found</p>
                }
            </Modal.Body>
            <Modal.Footer className="border-0">
                {
                    isSearching?
                    <></>:
                    <>
                    <Button variant="secondary" onClick={()=>{dispatch(toggleAddFamilyMember()); nav('/family')}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={searched && !userFound} onClick={()=>{ !searched? searchUser(contactNo): inviteUser(userIdFound)}}>
                        {!searched?"Add":"Yes"}
                    </Button>
                    </>
                }
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default AddMemberModal;