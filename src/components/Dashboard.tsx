import './containerStyles.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(){
    return(
    <div className='container' style={{height:"auto", minHeight:"90vh"}}>
        <h1><strong>How can we help you?</strong></h1>
        <div className='d-flex justify-content-center p-3'>
            <div className='d-flex flex-row'>
                <Link to="/forums" className="linkIconText">
                    <div>
                        <img 
                        src='mail-3-xxl.png'
                        alt='forums'
                        style={{height:"120px", width:"120px"}}
                        className='mx-3 mt-2 mb-0'/>
                        <h3 className='text-center w-100'>FORUMS</h3>
                    </div>
                </Link>
                <Link to="/family" className="linkIconText">
                    <div>
                        <img 
                        src='family-icon.png'
                        alt='family'
                        style={{height:"120px", width:"120px"}}
                        className='mx-3 mt-2 mb-0'/>
                        <h3 className='text-center w-100'>FAMILY</h3>
                    </div>
                </Link>
                <div>
                    <img 
                    src='newspaper-xxl.png'
                    alt='news'
                    style={{height:"120px", width:"120px"}}
                    className='mx-3 mt-2 mb-0'/>
                    <h3 className='text-center w-100'>FAMILY</h3>
                </div>
                <div>
                    <img 
                    src='emergency-icon.png'
                    alt='emergency'
                    style={{height:"120px", width:"120px"}}
                    className='mx-3 mt-2 mb-0'/>
                    <h3 className='text-center w-100'>EMERGENCY</h3>
                </div>
                <Link to="/tips" className="linkIconText">
                    <div>
                        <img 
                        src='idea-xxl.png'
                        alt='tips'
                        style={{height:"120px", width:"120px"}}
                        className='mx-3 mt-2 mb-0'/>
                        <h3 className='text-center w-100'>TIPS</h3>
                    </div>
                </Link>
            </div>
        </div>
            
    </div>
    );
}