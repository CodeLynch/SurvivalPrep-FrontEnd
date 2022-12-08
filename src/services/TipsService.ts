import axios from "axios";

const TIPS_BASE_URL = "http://localhost:8080/tip/getAllTips"

class TipsService{

    getAllTips(){
        return axios.get(TIPS_BASE_URL);
    }
}

export default new TipsService();