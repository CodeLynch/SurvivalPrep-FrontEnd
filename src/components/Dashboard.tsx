import './containerStyles.css';
import { Link } from 'react-router-dom';
import { EmergencyIcon, FamilyIcon, ForumIcon, NewsIcon, TipsIcon } from './icons';

export default function Dashboard(){
    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>How can we help you?</strong></h1>
        <div className='MainContainer d-flex justify-content-center p-3'>
            <div className='d-flex flex-row'>
                <Link to="/forums" className="linkIconText">
                    <div className='p-3 m-2 d-flex flex-column align-items-center'>
                        <ForumIcon/>
                        <h3 className='text-center w-100'>FORUMS</h3>
                    </div>
                </Link>
                <Link to="/family" className="linkIconText">
                    <div className='p-3 m-2 d-flex flex-column align-items-center'>
                        <FamilyIcon/>
                        <h3 className='text-center w-100'>FAMILY</h3>
                    </div>
                </Link>
                <div className='p-3 m-2 d-flex flex-column align-items-center'>
                    <NewsIcon/>
                    <h3 className='text-center w-100'>NEWS</h3>
                </div>
                <div className='p-3 m-2 d-flex flex-column align-items-center'>
                    <EmergencyIcon/>
                    <h3 className='text-center w-100'>EMERGENCY</h3>
                </div>
                <Link to="/tips" className="linkIconText">
                    <div className='p-3 m-2 d-flex flex-column align-items-center'>
                        <TipsIcon/>
                        <h3 className='text-center w-100'>TIPS</h3>
                    </div>
                </Link>
            </div>
        </div>
            
    </div>
    );
}