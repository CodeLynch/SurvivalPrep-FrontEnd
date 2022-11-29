
import './containerStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tips, { tipDetails } from './Tips';
import { useEffect, useState } from 'react';
import TipsService from '../services/TipsService';

type tipsType = {tipid:number, tipcategory:string, tipcontent:string, isdeleted:boolean}

export default function TipsPage() {
  // const [TipsList, setTipsList] = useState<tipDetails[]>([
  //   { tipid: 1, tipcategory: "earthquake", tipcontent: "duck adsfasdf adsfasdf adfasdf adsfasdf adsfasdf asdfasdf adsfasdf adsfadsfa adsfasdf adsfasdfasdfasdfadsfasdfasdfasdfasdfasdfasdfasdfas" },
  //   { tipid: 2, tipcategory: "earthquake", tipcontent: "cover" },
  //   { tipid: 3, tipcategory: "earthquake", tipcontent: "hold" },
  //   { tipid: 4, tipcategory: "typhoon", tipcontent: "hide" },
  //   { tipid: 5, tipcategory: "fire", tipcontent: "run" }
  // ])
  const [TipsList, setTipsList] = useState<tipsType[]>([
    
  ])

  useEffect(()=>{
    TipsService.getAllTips().then((response)=>{
    setTipsList(response.data)
  });},[])

  return (
    <div className='container' style={{ minHeight: "80vh", width: '80vw' }}>
      <h1><strong>Tips</strong></h1>
      <div className='MainContainer' style={{ height: 'auto', minHeight: '70vh', width: '80vw' }}>
        <div className='SecondaryContainer m-5 p-3' style={{ width: '90%' }}>
          <h4>Earthquake Tips</h4>
          {TipsList.map((member, i) =>
            member.tipcategory === 'earthquake' ?
              <div className="col-auto">
                <Tips tipid={member.tipid}
                  tipcategory={member.tipcategory}
                  tipcontent={member.tipcontent}
                  key={i} />
              </div>
              : <div></div>
          )
          }
        </div>
        <div className='SecondaryContainer mx-5 p-3' style={{ width: '90%' }}>
          <h4>Typhoon Tips</h4>
          {TipsList.map((member, i) =>
            member.tipcategory === 'typhoon' ?
              <div className="col-auto">
                <Tips tipid={member.tipid}
                  tipcategory={member.tipcategory}
                  tipcontent={member.tipcontent}
                  key={i} />
              </div>
              : <div></div>
          )
          }
        </div>
        <div className='SecondaryContainer m-5 p-3' style={{ width: '90%' }}>
          <h4>Fire Tips</h4>
          {TipsList.map((member, i) =>
            member.tipcategory === 'fire' ?
              <div className="col-auto">
                <Tips tipid={member.tipid}
                  tipcategory={member.tipcategory}
                  tipcontent={member.tipcontent}
                  key={i} />
              </div>
              : <div></div>
          )
          }
        </div>
      </div>
    </div>
  );
}