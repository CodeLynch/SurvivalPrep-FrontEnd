import './containerStyles.css';

export type tipDetails = {
    tipid: number,
    tipcategory: string,
    tipcontent: string
}
export default function Tips(props: tipDetails) {
  return (
    <div>
      <div className="SecondaryContainer m-2 p-3" style={{width: '97%'}}>
        <div>{props.tipcontent}</div>
      </div>
    </div>
  );
}