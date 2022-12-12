import "./containerStyles.css";
import './NavBar.css';

function EmergencyPage() {

  return (
    <div className="container">
      <h1><strong>Emergency</strong></h1>
      <div className='MainContainer' style={{ minHeight: "75vh", width: "100%", height: 'auto' }}>
        <div style={{ marginLeft: '15px', marginTop:'10px'}}>
          <h4>NDRRMC</h4>
          <p>(032) 416-5025</p>
          <p>(032) 416-5025</p>
          <br></br>
          <h4>BUREA OF FIRE PROTECTION</h4>
          <p>(02) 729-5166 9</p>
          <p>(02) 410-631</p>
          <br></br>
          <h4>RED CROSS</h4>
          <p>143</p>
          <p>(02) 527-0000</p>
          <p>(02) 527-8385 to 95</p>
        </div>
      </div>
    </div >
  );
}
export default EmergencyPage;