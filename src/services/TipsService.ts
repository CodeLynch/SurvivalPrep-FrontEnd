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