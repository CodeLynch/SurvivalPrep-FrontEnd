import axios from "axios";

//const USER_BASE_URL = "http://localhost:8080/user/putUser"

class UserServiceUpdate{

    putUsername(username: string,userId:number){
        return axios.put(`http://localhost:8080/user/putUsername?==${userId}`,
        {
            
        })
    }

}

export default new UserServiceUpdate();