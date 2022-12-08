import axios from "axios";

const COMMUNITY_BASE_URL = "http://localhost:8080/community/getAllCommunities"

class CommunityService{

    getCommunities(){
        return axios.get(COMMUNITY_BASE_URL);
    }
}

export default new CommunityService();