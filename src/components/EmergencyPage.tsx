import "./containerStyles.css";
import './NavBar.css';

function EmergencyPage() {

  return (
    <div className="container">
      <h1><strong>Emergency</strong></h1>
      <div className='MainContainer' style={{ minHeight: "75vh", width: "100%", height: 'auto' }}>
        <div className="p-3">
          <h4><strong>Emergency 911 National Office</strong></h4>
          <p>911</p>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column w-100">
              <h4><strong>NDRRMC</strong></h4>
              <h5 className="m-0">Telephone Hotlines:</h5>
              <p> 
                (02) 911-1406, 
                (02) 912-2665,
                (02) 912-5668,
                (02) 911-1873</p>
              <h5 className="m-0">Hotline Numbers:</h5>
              <p className="m-0">Western Visayas: (033) 337-6671, 509-7971</p>
              <p className="m-0">Central Visayas: (032) 416-5025</p>
              <p>Eastern Visayas: (053) 323-8453</p>  
            </div>  
            <div className="d-flex flex-column w-100"> 
              <h4><strong>BUREA OF FIRE PROTECTION</strong></h4>
              <h5 className="m-0">Hotline Numbers:</h5>
              <p className="m-0">BFP NCR Hotline: (02) 729-5166 9</p>
              <p className="m-0">BFP Information Desk: (02) 410-631</p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column w-100"> 
              <h4><strong>RED CROSS</strong></h4>
              <h5 className="m-0">Hotline Numbers:</h5>
              <p className="m-0">143</p>
              <p className="m-0">(02) 527-0000</p>
              <p className="m-0">(02) 527-8385 to 95</p>
            </div>
            <div className="d-flex flex-column w-100"> 
              <h4><strong>Philippine National Police</strong></h4>
              <h5 className="m-0">SMS:</h5>
              <p className="m-0">Send TXT PNP to 2920</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div >
  );
}
export default EmergencyPage;