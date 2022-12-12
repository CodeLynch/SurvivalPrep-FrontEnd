import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import { Routes, Route } from "react-router-dom";
import FamilyPage from './components/FamilyPage';
import Profilepage from './components/Profilepage';
import EditProfilepage from './components/EditProfilepage';
import TipsPage from './components/TipsPage';
import ForumsPage from './components/ForumsPage';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import NewsPage from './components/NewsPage';
import EmergencyPage from './components/EmergencyPage';
import ErrorPage from './components/ErrorPage';
import CreateFamilyModal from './components/createFamilyModal';
import JoinFamilyModal from './components/joinFamilyModal';
import AddMemberModal from './components/addMemberModal';
import RemoveMemberModal from './components/removeMemberModal';
import AddTipModal from './components/addTipModal';
import RemoveTipModal from './components/removeTipModal';
import CreatePostModal from './components/createPostModal';
import RemovePostModal from './components/RemovePostModal';
import ThreadPage from './components/ThreadPage';
import PostsPage from './components/PostsPage';




export default function App() {
    const loginState = useSelector((store:RootState) => store.login.isLoggedIn)
    return (
      <div className='App'>
        <div className='App-container'>
            <NavBar />
              {loginState?
              <Routes>
                  <Route path="/" element={<Dashboard/>}></Route>
                  <Route path="/register" element={<Registration/>}></Route>
                  <Route path="/forums" element={<ForumsPage/>}></Route>
                  <Route path="/threads" element={<ThreadPage/>}></Route>
                  <Route path="/posts" element={<PostsPage/>}></Route>
                  <Route path="/family" element={<FamilyPage/>}>
                    <Route path="createFamily" element={<CreateFamilyModal/>}></Route>
                    <Route path="joinFamily" element={<JoinFamilyModal/>}></Route>
                    <Route path="addMember" element={<AddMemberModal/>}></Route>
                    <Route path="removeMember/:memberid" element={<RemoveMemberModal/>}></Route>
                  </Route>
                  <Route path="/news" element ={<NewsPage/>}></Route>
                  <Route path="/emergency" element ={<EmergencyPage/>}></Route>
                  <Route path="/tips" element={<TipsPage/>}>
                    <Route path="addTip" element={<AddTipModal/>}></Route>
                    <Route path="removeTip/:tipid" element={<RemoveTipModal/>}></Route>
                  </Route>
                  <Route path="/profile" element={<Profilepage/>}></Route>
                  <Route path="/createPost" element={<CreatePostModal/>}></Route>
                    <Route path="/removePost/:postId" element={<RemovePostModal/>}></Route>
                    <Route path="/editprofile" element ={<EditProfilepage/>}></Route>
                    <Route path="*" element ={<ErrorPage/>}></Route>
                </Routes>:
                <Routes>
                  <Route path="/" element={<LandingPage/>}></Route>
                  <Route path="/register" element={<Registration/>}></Route>
                  <Route path="*" element ={<ErrorPage/>}></Route>
                </Routes>}
                
        </div>
      </div>
    );
  
}
