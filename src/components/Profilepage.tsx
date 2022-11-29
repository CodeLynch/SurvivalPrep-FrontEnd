import { profile } from "console";
import { useState } from "react";
import "./containerStyles.css";
import ProfilePost from "./ProfilePost";

function Profilepage() {
  const [images, setimages] = useState([]);

  return (
    <div className="container">
        <div className="d-flex justify-content-center p-3" style={{width:"100%"}}>
            <div
            className="p-2 MainContainer"
            style={{ width: "50%", height: "auto", maxHeight: "80vh" }}
            >
                <div className="d-flex flex-row">
                    <div className="p-3">
                        <img
                        style={{width:"100px", height:"100px"}}
                        src="profileIcon.png"
                        alt="profile icon"
                        ></img>
                    </div>
                    
                    <div className="mt-3">
                    <h2 className="m-0" ><strong>Gelyn</strong></h2>
                    <p className="m-0">Delete Profile</p>
                    <p className="m-0"> Edit Profile</p>
                    <p className="m-0">Logout</p>
                    </div>
                </div>
            </div>
        </div>
        <div
        className="px-5 mx-5"
        style={{ height: "5vh" }}
        >
            <h1><strong>Posts</strong></h1>
            <ProfilePost threadTitle="Thread 1" post="This is a post" date="11/29/2022" time="8:45 AM" />
        </div>
      
    </div>
  );
}
export default Profilepage;
