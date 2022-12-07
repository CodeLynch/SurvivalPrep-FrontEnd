import './containerStyles.css';
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UserServiceUpdate from '../services/UserServiceUpdate';
import UserService from '../services/UserService';


function EditProfilePage(this: any){
    const[username,setUsername] = useState ('')
    const[currentpass,setCurrentpass] = useState('')
    const[newpassword,setNewpassword] = useState('')
    const [reenterpassword,setRenternewpassword] = useState('')

    // useEffect(() => {
    //     UserService.getUserDetails(userId).then((res)=>{


    //     })
    // })
    // const UserUpdate = () => {
    //     UserServiceUpdate.putUsername(username,userId).then((res) =>{
    //         res.data;
    //     });
    // }

    const handleSubmit = (event:React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        // console.log(username, currentpass, newpassword, reenterpassword);
    }
  
    return(
        <div className= "container p-5">
            <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
                <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                <h1>Edit Profile</h1>
                    <div className='profile_img text-center '>
                        <div className='flex flex-column justify-content-center align-items-center'>
                            <form onSubmit={handleSubmit}></form>
                            <img
                            style={{ width: '120px' }}
                            src='profileIcon.png'
                            alt="Profile Pic"
                            className="rounded-circle"
                            />
                            <h6> Change Profile </h6>
                        </div>
                    </div>      
                    <h6> Change Username</h6>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Username'
                    className='mt-2'
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="d-flex justify-content-end m-2">
                        <Button type = "submit"> confirm</Button>
                        </div>
                        <h6> Change Password</h6>
                        <Form.Control
                        type="text"
                        id="inputText"
                        placeholder='Current Password'
                        className='mt-2'
                        onChange={(e) => setCurrentpass(e.target.value)}
                        />
                        <Form.Control
                        type ="text"
                        id ="inputText"
                        placeholder ="New Password"
                        className ="mt-2"
                        onChange={(e) => setNewpassword(e.target.value)}
                        />
                        <Form.Control
                        type =" text"
                        id = "inputText"
                        placeholder ="Re-Type New Password"
                        className="mt-2"
                        onChange={(e) => setRenternewpassword(e.target.value)}
                        />
                         <div className="d-flex justify-content-end m-2">
                            <Button> confirm</Button>
                            </div>
                </div>
            </div> 
            
        </div>
    );
}
export default EditProfilePage;

