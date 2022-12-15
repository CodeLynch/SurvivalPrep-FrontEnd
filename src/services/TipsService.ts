import axios from "axios";

const TIPS_BASE_URL = "http://localhost:8080/tip/getAllTips"

class TipsService {

    postTip(tipCategory: string, tipContent: string) {
        return axios.post("http://localhost:8080/tip/postTip", {
            tipcategory: tipCategory,
            tipcontent: tipContent
        }).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    getAllTips() {
        return axios.get(TIPS_BASE_URL);
    }

    getByTipid(tipId:number){
        return axios.get("http://localhost:8080/tip/getByTipid?tipid="+tipId
        ).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    putTipContent(tipId:number, tipContent:string){
        return axios.put("http://localhost:8080/tip/putTipContent?tipid="+tipId,{
            tipcontent:tipContent
        }).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteTip(tipId:number) {
        return axios.delete("http://localhost:8080/tip/deleteTip/"+tipId
        ).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

export default new TipsService();