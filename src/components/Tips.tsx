import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleRemoveTip, toggleUpdateTip } from '../features/TipSlice';
import { RootState } from '../store';
import './containerStyles.css';

export type tipDetails = {
  tipid: number,
  tipcategory: string,
  tipcontent: string
}
export default function Tips(props: tipDetails) {
  const dispatch = useDispatch();
  const adminState = useSelector((store: RootState) => store.login.isAdmin);

  return (
    <div>
      <div className="SecondaryContainer m-2 p-3" style={{ width: '97%' }}>
        <div className='d-flex flex-row'>
          <div style={{ width: "90%" }}>{props.tipcontent}</div>
          {
            adminState ?
              <>
                <Link to={"/tips/editTip/" + props.tipid} onClick={() => { dispatch(toggleUpdateTip()) }} className="linksColor mx-2">edit</Link>
                <Link to={"/tips/removeTip/" + props.tipid} onClick={() => { dispatch(toggleRemoveTip()) }} className="linksColor">remove</Link>
              </>
              :
              <></>
          }
        </div>
      </div>
    </div>
  );
}