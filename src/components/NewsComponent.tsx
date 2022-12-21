import { Link } from "react-router-dom";

export type SourceType = {
    id: string,
    name: string
}

export type NewsType = {
    source: SourceType,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}


export default function NewsComp(props: NewsType) {
    const formatDateTime = (datetime:string) => {
        let d = new Date(datetime);
        return d.toLocaleString();
    }

  return (
    <div>
        <a href={props.url} target="_blank" className="linksColor">
            <div className="SecondaryContainer m-1 p-2" style={{height:"300px", width:"320px"}}>
                <div className="w-100 p-2">
                    <img style={{objectFit: "cover"}} className="w-100" src={props.urlToImage? props.urlToImage:"imgnotavailable.jpg"} height="100px" />
                </div>
                
                <p className="m-0" style={{fontSize:"12px"}}>{props.author? "by " + props.author: ""}</p>
                <p className="m-0" style={{fontSize:"12px"}}>{formatDateTime(props.publishedAt)}</p>
                <p className="m-0" style={{fontSize:"14px"}}><strong>{props.title}</strong></p>
                <span className="m-0" style={{display:"block", fontSize:"12px", overflow:"hidden", textOverflow:"ellipsis", width:"300px"}}>{props.description}</span>
            </div> 
        </a>
    </div>
  );
}