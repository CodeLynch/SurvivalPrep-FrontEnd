import './containerStyles.css';
import Tips from './Tips';
import { useEffect, useState } from 'react';
import TipsService from '../services/TipsService';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { PlusIcon } from './icons';
import { useDispatch } from 'react-redux';
import { toggleAddTip } from '../features/TipSlice';

type tipsType = { tipid: number, tipcategory: string, tipcontent: string, isdeleted: boolean }

export default function TipsPage() {
  const [TipsList, setTipsList] = useState<tipsType[]>([
  ])
  const loginState = useSelector((store: RootState) => (store.login.isLoggedIn))
  const nav = useNavigate()
  const dispatch = useDispatch()
  const showState = useSelector((store:RootState) => store.tip.showAddTipModal);

  useEffect(() => {
    if (!loginState) {
      nav("/")
    }
  }, [loginState, nav])

  useEffect(() => {
    TipsService.getAllTips().then((response) => {
      setTipsList(response.data)
    });
  }, [])

  return (
    <>
      <Outlet />
      <div className='container' style={{ minHeight: "80vh", width: '80vw' }}>
        <h1><strong>Tips</strong></h1>
        <div className='MainContainer' style={{ height: 'auto', minHeight: '70vh', width: '80vw' }}>
          <div style={{ marginRight: '50px', marginTop: '20px' }}>
            <Link to="addTip" className='linksColor d-flex flex-row align-items-end justify-content-end'
              onClick={() => {dispatch(toggleAddTip()); console.log(showState)}}>
              <PlusIcon />
              <p className='m-0' style={{ fontSize: "14px" }}>Add Tip</p>
            </Link>
          </div>
          <div className='SecondaryContainer m-5 p-3' style={{ width: '90%' }}>
            <h4>Earthquake Tips</h4>
            {TipsList.map((member, i) =>
              member.tipcategory === 'earthquake' ?
                <div className="col-auto" key={i}>
                  <Tips tipid={member.tipid}
                    tipcategory={member.tipcategory}
                    tipcontent={member.tipcontent}
                    key={i} />
                </div>
                : <div key={i} ></div>
            )
            }
          </div>
          <div className='SecondaryContainer mx-5 p-3' style={{ width: '90%' }}>
            <h4>Typhoon Tips</h4>
            {TipsList.map((member, i) =>
              member.tipcategory === 'typhoon' ?
                <div className="col-auto" key={i}>
                  <Tips tipid={member.tipid}
                    tipcategory={member.tipcategory}
                    tipcontent={member.tipcontent}
                    key={i} />
                </div>
                : <div key={i} ></div>
            )
            }
          </div>
          <div className='SecondaryContainer m-5 p-3' style={{ width: '90%' }}>
            <h4>Fire Tips</h4>
            {TipsList.map((member, i) =>
              member.tipcategory === 'fire' ?
                <div className="col-auto" key={i}>
                  <Tips tipid={member.tipid}
                    tipcategory={member.tipcategory}
                    tipcontent={member.tipcontent}
                    key={i} />
                </div>
                : <div key={i} ></div>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
}