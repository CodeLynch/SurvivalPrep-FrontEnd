import { useEffect, useState } from "react";
import "./containerStyles.css";
import ProfilePost, { ProfilePostType } from "./ProfilePost";
import './NavBar.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { adminReducer, deleteProfileReducer, logoutReducer, userIdReducer } from "../features/LogInSlice";
import { familyIdReducer} from "../features/FamilySlice";


function Profilepage() {
    const dispatch = useDispatch()
    const userIdState = useSelector((store:RootState) => store.login.userId)
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const[username,setUsername] = useState('');
    const [isLoading, setLoading] = useState(false);
    const nav = useNavigate();
    
    const [PostArr, setPostArr] = useState<ProfilePostType[]>([
      ])

      useEffect(() => {
        UserService.getUserDetails(userIdState).then((res)=>{
            setFname(res.firstname); 
            setLname(res.lastname);
            setUsername(res.username);
          })
      },[userIdState]);


      const logout = () => {
        dispatch(logoutReducer());
        dispatch(userIdReducer(0));
        dispatch(familyIdReducer(0));
        dispatch(adminReducer(false));
        nav("/");
      }

    useEffect(()=>{
      setLoading(true);
        UserService.getPost(userIdState).then((response)=>{
        let arr = [...response];
        arr.map((post, p)=>{
            if(post.thread.deleted){
              arr[p] = {
                threadTitle: "DELETED",
                threadId: post.thread.threadid,
                post: post.postcontent,
                datetime: post.datetimecreated,
              }
            }else{
              arr[p] = {
                threadTitle: post.thread.threadtitle,
                threadId: post.thread.threadid,
                post: post.postcontent,
                datetime: post.datetimecreated,
              }
            }
            
        })
        setPostArr(arr);
        setLoading(false);

        console.log("userid", userIdState)
      });},[])


  return (
    <>
    <Outlet/>
    <div className="container">
        <div className="d-flex justify-content-center p-3" style={{width:"100%"}}>
            <div
            className="p-2 MainContainer"
            style={{ width: "50%", height: "auto", maxHeight: "80vh" }}
            >
                <div className="d-flex flex-row align-items-center pb-3">
                    <div className="p-3">
                        <img
                        style={{width:"100px", height:"100px"}}
                        src="profileIcon.png"
                        alt="profile icon"
                        ></img>
                    </div>
                    
                    <div className="mt-3">
                    <h2 className="m-0" ><strong>{firstname}&nbsp;{lastname}</strong></h2>
                    <h6 className="m-0">{username}</h6>
                    <Link to={"deleteAccount/" + userIdState} className="dangerColor"
                    onClick={()=>{dispatch(deleteProfileReducer())}}>
                      <p className="m-0">Delete Account</p>
                    </Link>
                    <p className="m-0"><Link to='/editprofile' className="linksColor">Edit Profile</Link></p>
                    <p className="m-0"><Link to="/" className="linksColor" onClick={logout}>Logout</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div
        className="px-5 mx-5"
        style={{ height: "5vh" }}
        >
            <h1><strong>Posts</strong></h1>
            {
              isLoading?
              <>
                <div className='d-flex justify-content-center'>
                  <img className='App-logo' src='AppLogoSymbol.png' alt='spinner'/>
                </div>
              </>
              :
                PostArr.length !== 0 ?
                PostArr.map((post, i) =>
                <ProfilePost key={i} threadTitle={post.threadTitle} threadId={post.threadId} post={post.post} datetime={post.datetime}></ProfilePost> 
                )
                :
                <p className="text-center">This user has no posts!</p>
            }
        </div>
    </div>
    </>
  );
}
export default Profilepage;
