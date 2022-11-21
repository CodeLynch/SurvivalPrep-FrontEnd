import './containerStyles.css';
import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function EditProfilePage(){
    return(
        <div className= "container">
            <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
                <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                <h1>Edit Profile</h1>
                    <div className='profile_img text-center p-4'>
                        <div className='flex flex-column justify-content-center align-items-center'>
                            <img
                            width= "100px"
                            height = "100x"
                            // borderRadius ="50%"
                            // objectFit = "cover"
                            // border =" 4px solid black"
                             
                            // src ={profile} alt =""
                            /> 
                            <h5> Change Profile </h5>
                        </div>
                    </div>

                   
                    <h6> Change Username</h6>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Username'
                    className='mt-2'
                    />
                    <div className="d-flex justify-content-end">
                        <Button> confirm</Button>
                        </div>
                        <h6> Change Password</h6>
                        <Form.Control
                        type="text"
                        id="inputText"
                        placeholder='Old Password'
                        className='mt-2'
                        />
                        <Form.Control
                        type ="text"
                        id ="inputText"
                        placeholder ="New Password"
                        className ="mt-2"
                        />
                        <Form.Control
                        type =" text"
                        id = "inputText"
                        placeholder ="Re-Type New Password"
                        className="mt-2"
                        />
                         <div className="d-flex justify-content-end">
                            <Button> confirm</Button>
                            </div>
                </div>
            </div>
            
        </div>
    );
}
export default EditProfilePage;