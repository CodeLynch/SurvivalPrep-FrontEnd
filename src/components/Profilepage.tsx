import './containerStyles.css';

 function Profilepage(){
    return(
        <div className= "container">
        <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
            <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                <div className='profile_img text-left p-4'>
                    <div className='flex flex-column justify-content-center align-items-center'>
                        <img
                        width= "100px"
                        height = "100x"
                        //borderRadius ="50%"
                         //objectFit = "cover"
                        //border =" 4px solid black"
                        //src ={profile} 
                        alt ="Profile Pic"
                        />  <h1> Gelyn</h1>
                        <h6>Delete Profile</h6>
                        <h6> Edit Profile</h6>
                        <h6>Logout</h6>
                        </div>  
                    </div>
                  
                    </div>
                    <div className="d-flex flex-column align-bottom">
                        <h1> Posts</h1>
                        </div>
                        
                </div>
                 
        
                </div>
              
    );
}
export default Profilepage;