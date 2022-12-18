import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import TipsService from "../services/TipsService";
import { toggleRemoveTip } from "../features/TipSlice";

function RemoveTipModal() {
    const showState = useSelector((store:RootState) => store.tip.showRemoveTipModal);
    //const userIdState = useSelector((store:RootState) => store.login.userId);
    const {tipid} = useParams();
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

    const removeTip = (tipId: number) => {
        TipsService.deleteTip(tipId).then((res)=>{
            console.log(res);
            if(res !== null){
                alert("Tip successfully deleted!");
            }
        })
    }


  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleRemoveTip())}}>
            <Modal.Header className="border-0" style={{color:"white"}}>
            <Modal.Title>Remove Tip?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this tip?</p>
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={()=>{dispatch(toggleRemoveTip()); nav('/tips')}}>
                        No
                    </Button>
                    <Button variant="danger" onClick={()=>{removeTip(Number(tipid)); dispatch(toggleRemoveTip()); nav('/tips')}}>
                        Yes
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default RemoveTipModal;