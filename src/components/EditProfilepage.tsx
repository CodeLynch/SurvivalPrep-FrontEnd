import './containerStyles.css';
import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UserServiceUpdate from '../services/UserServiceUpdate';
import UserService from '../services/UserService';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function EditProfilePage(this: any){
    const[username,setUsername] = useState ('')
    const[currentpass,setCurrentpass] = useState('')
    const [passcurrent,setPasscurrent] = useState('')
    const[newpassword,setNewpassword] = useState('')
    const [reenterpassword,setRenternewpassword] = useState('')                  
    const userIdState = useSelector((store:RootState) => store.login.userId)
    const loginState = useSelector((store:RootState) => (store.login.isLoggedIn))
    const nav = useNavigate();
    

    useEffect(() =>{
        UserService.getUserDetails(userIdState).then((res) =>{
            setPasscurrent(res.password)
        })
    },[])

    const passUpdate =() =>{
        if(currentpass === passcurrent){
            
            if(newpassword=== reenterpassword){
                UserServiceUpdate.putPassword(newpassword,userIdState).then((res)=>{
                    alert("Password Successfully changed")
                })

            }else{
                alert("Password do not matched!")
            }

        }else{
            alert("Wrong current password")
        }

        
    }


    const UserUpdate = () => {
        UserServiceUpdate.putUsername(username,userIdState).then((res) =>{ 
            if(res.username!== '')
             setUsername(res.username);
             alert("Username successfully changed!");
             
             nav("/editProfile");
        });
    }


    const handleSubmit = (event:React.SyntheticEvent<HTMLFormElement>) => {
        // setUsername(e.target.value);
        event.preventDefault(); 
        const form = event.currentTarget;
        console.log(username);
    }
  
    return(
        <div className= "container p-5">
            <div className="d-flex flex-row align-items-center justify-content-center" style={{height:'90vh'}}>
                <div className='px-3 py-3 MainContainer' style={{width:'50vw'}}>
                <h1>Edit Profile</h1>
                    <div className='profile_img text-center '>
                        <div className='flex flex-column justify-content-center align-items-center'> 
                            <img
                            style={{ width: '120px' }}
                            src='profileIcon.png'
                            alt="Profile Pic"
                            className="rounded-circle"
                            />
                            <h1> {username}</h1>
                            <h6> Change Profile </h6>
                        </div>
                    </div> 
                    <form onSubmit={handleSubmit}></form>     
                    <h6> Change Username</h6>
                    <Form.Control
                    type="text"
                    id="inputText"
                    placeholder='Username'
                    className='mt-2'
                    onChange={(e) => {setUsername(e.target.value)}}

                    />
                    <div className="d-flex justify-content-end m-2">
                        <Button type = "submit" onClick={()=>{UserUpdate()}} > confirm</Button>
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
                            <Button type ="submit"  onClick={()=>{passUpdate()}}  > confirm</Button>
                            </div>
                </div>
            </div> 
            
        </div>
    );
}
export default EditProfilePage;

