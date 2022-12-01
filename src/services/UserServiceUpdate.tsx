import axios from "axios";

//const USER_BASE_URL = "http://localhost:8080/user/putUser"

class UserServiceUpdate{

    putUser(username: string,password: string){
        return axios.put("http://localhost:8080/user/putUsername",
        {
            username: username,
            password: password

        }
        )
    }

}

export default new UserServiceUpdate();