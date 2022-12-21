import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleToggler } from "../features/LogInSlice";
import { toggleAddTip } from "../features/TipSlice";
import TipsService from "../services/TipsService";
import { RootState } from "../store";


function AddTipModal() {
    const showState = useSelector((store:RootState) => store.tip.showAddTipModal);
    const userIdState = useSelector((store:RootState) => store.login.userId);
    const [tipcategory, setTipCategory] = useState('');
    const [tipcontent, setTipContent] = useState('');
    const dispatch = useDispatch();
    //const nav = useNavigate();
    //const loc = useLocation();

    const addTips = () => {
        TipsService.postTip(tipcategory,tipcontent).then((resp) => {
            // alert("Tip Added!")
            dispatch(toggleToggler());
            dispatch(toggleAddTip())
            // window.location.reload();
        });
    }

  return (
    <div className="container">
            <Modal show={showState} dialogClassName="modal-dialog modal-dialog-centered" contentClassName="popupContainer" onHide={()=>{}}>
            <Modal.Header className="border-0">
            <Modal.Title>Add Tip?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="tipcategory"
                    placeholder='Tip Category'
                    onChange={(e)=>{setTipCategory(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                    required
                    type="text"
                    id="tipcontent"
                    placeholder='Tip Content'
                    onChange={(e)=>{setTipContent(e.target.value)}}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={()=>{dispatch(toggleAddTip())}}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{addTips()}}>
                Add Tip
            </Button>
            </Modal.Footer>
            </Modal>
    </div>
  );
}
export default AddTipModal;