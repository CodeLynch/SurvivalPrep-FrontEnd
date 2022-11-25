import './containerStyles.css';

export type familyMemberType = {
    firstname: string,
    lastname: string,
    contactno: string,
    isCreator: boolean
}
export default function FamilyMember(props: familyMemberType) {
  return (
    <div>
      <div className="SecondaryContainer m-1">
        <div className='d-flex flex-row'>
          <div className='d-flex justify-content-center align-items-center p-2'>
            <img className="imgFixedSize "src='profileIcon.png' alt="profile icon"></img>
          </div>
          <div className='d-flex flex-column p-2' style={{width: "15vw"}}>
            <div className='d-flex flex-row m-0 p-0 w-100 h-100'>
              <h5 className="m-0">{props.firstname}</h5>&nbsp;<h5 className="m-0">{props.lastname}</h5>
            </div>
            <p className="m-0 contentText">{props.contactno}</p>
            <p className="m-0 contentText">{props.isCreator ? 'Creator' : 'Member' }</p>
          </div>
          <div className='d-flex p-3 flex-column align-items-start'>
            <p className="contentText">Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
}