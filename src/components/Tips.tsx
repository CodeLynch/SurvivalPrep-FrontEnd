import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleRemoveTip } from '../features/TipSlice';
import './containerStyles.css';

export type tipDetails = {
    tipid: number,
    tipcategory: string,
    tipcontent: string
}
export default function Tips(props: tipDetails) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="SecondaryContainer m-2 p-3" style={{width: '97%'}}>
        <div className='d-flex flex-row'>
          <div style={{width:"90%"}}>{props.tipcontent}</div>
          <Link to={"/tips/removeTip/"+props.tipid} onClick={()=>{dispatch(toggleRemoveTip())}} className="linksColor">remove</Link>
        </div>
      </div>
    </div>
  );
}