import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Button, Form, Modal } from "react-bootstrap";
import "./containerStyles.css";
import './NavBar.css';
import { toggleUpdateTip } from "../features/TipSlice";
import TipsService from "../services/TipsService";
import { toggleToggler } from "../features/LogInSlice";

function UpdateTipModal() {
    const showState = useSelector((store:RootState) => store.tip.showUpdateTipModal);
    const [tipContent, setTipContent] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {tipId} = useParams();
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        TipsService.getByTipid(Number(tipId)).then((res) =>{
            setTipContent(res.tipcontent);
            setLoading(false);
        })
    },[])
    const editTip = () => {
        if(tipContent === ''){
            alert("Please fill out the text field")
        }else{
            setLoading(true);
            TipsService.putTipContent(Number(tipId), tipContent).then((res)=>{
            setLoading(false);
            // alert("Tip updated successfully!")
            dispatch(toggleToggler());
            dispatch(toggleUpdateTip())
            // window.location.reload();
        })
        }
        
    }
  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{dispatch(toggleUpdateTip())}}>
            <Modal.Header className="border-0">
            <Modal.Title>Edit Tip?</Modal.Title>
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
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="tipContent"
                    placeholder='Tip Content'
                    value={tipContent}
                    onChange={(e)=>{setTipContent(e.target.value)}}
                    />
                </Form.Group>
                </>
            }
            </Modal.Body>
            <Modal.Footer className="border-0">
                    <Button variant="secondary" disabled={isLoading} onClick={()=>{dispatch(toggleUpdateTip()); nav('/tips')}}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={isLoading} onClick={()=>{editTip()}}>
                        Edit
                    </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default UpdateTipModal;