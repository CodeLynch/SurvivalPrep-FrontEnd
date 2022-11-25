import { profile } from 'console';
import { useState } from 'react';
import './containerStyles.css';

 function Profilepage(){
    const [images,setimages] = useState([]);
    
    return(
    <div className= "container">
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                <div className='profile_img text-left p-4'>
                    <div className='flex flex-column justify-content-center align-items-center'>
                        <img 
                         style={{ width: '120px' }}
                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                         alt="Profile Picture"
                         className="rounded-circle"
                         />
                         <div className='align-middle'>
                            <h2> Gelyn</h2>
                            <h6>Delete Profile</h6>
                            <h6> Edit Profile</h6>
                            <h6>Logout</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="d-flex flex-column align-bottom">
            <h1> Posts</h1>
         </div>
        <div className= "px-3 py-3 MainContainer justify-content-center align-items-center" style={{width:'40vw'}}>
                <h3> Thread Title</h3>
            </div>
         </div>             
    );
}
export default Profilepage;