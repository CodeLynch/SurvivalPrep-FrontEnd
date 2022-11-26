import { profile } from 'console';
import { useState } from 'react';
import './containerStyles.css';

 function Profilepage(){
    const [images,setimages] = useState([]);
    
    return(
    <div className= "container">
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'50vh'}}>
            <div className='px-2 py-2 MainContainer' style={{width:'50%', height:'auto', maxHeight:'80vh'}}>
                <div className='profile_img text-left p-4'>
                    <div className='d-flex'>
                        <img 
                        style={{ width: '120px' }}
                        src=""
                        alt="Profile Picture"
                        className="rounded-circle"
                        /> 
                        <div className="flex-grow-1 ms-3">
                            <h2> Gelyn</h2>
                            <h6>Delete Profile</h6>
                            <h6> Edit Profile</h6>
                            <h6>Logout</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly" style={{height:'5vh'}}>
            <h1> Posts</h1>
        </div>
        <div className="d-flex flex-columnalign-items-bottom justify-content-sm-center">
        <div className= "px-3 py-3 MainContainer justify-content-center align-items-center" style={{width:'40vw'}}>
            <h3> Thread Title</h3>
        </div>
    </div>
</div>             
    );
}
export default Profilepage;