
import './containerStyles.css';
import { useState } from 'react';
import FamilyMember from './FamilyMember';

export default function FamilyPage() {
  const [hasNoFamily, setNoFamily] = useState(false);
  const [hasNoMembers, setNoMembers] = useState(false);
   
  return (
    <div className='container' style={{height:"90vh"}}>
      <h1>My Family</h1>
      <div className="MainContainer p-3 " style={{height:"75vh", width:"90vw"}}>
        <div className='d-flex flex-row justify-content-between p-2'>
          <div className='d-flex flex-row'>
            <h3>Family Name</h3>
            <div className='d-flex flex-row align-items-start'>
              <img src="copy-link.png" alt="copy link icon" style={{height:"10px", width:"10px", margin:"2px"}}/>
              <p className='m-0' style={{fontSize:"8px"}}>Copy Invite Link</p>
            </div>
          </div>
          <div className='d-flex flex-row align-items-end'>
          <img src="plus-7-xxl.png" alt="plus icon" style={{height:"15px", width:"15px", margin:"0px 5px 2px 5px"}}/>
            <p className='m-0' style={{fontSize:"14px"}}>Add Family Member</p>
          </div>
        </div>
        <div className='container' style={{height:"90%"}}>
          {/* <Scroll> */}
            <div className='row d-flex justify-content-center' style={{height:"100%"}}>
              <div className="col-auto">
              <FamilyMember firstname='John' lastname='Doe' contactno='12345' isCreator={true} />
              </div>
              <div className="col-auto">
              <FamilyMember firstname='Jane' lastname='Doe' contactno='12345' isCreator={false} />
              </div>
              <div className="col-auto">
              <FamilyMember firstname='Jill' lastname='Doe' contactno='12345' isCreator={false} />
              </div>           
            </div>
          {/* </Scroll> */}
        </div>
      </div>
    </div>
  );
}