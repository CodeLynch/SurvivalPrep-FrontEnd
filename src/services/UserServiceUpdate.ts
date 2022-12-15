import axios from "axios";

//const USER_BASE_URL = "http://localhost:8080/user/putUser"

class UserServiceUpdate{

    putUsername(username: string,userId:number){
        return axios.put(`http://localhost:8080/user/putUsername?id=${userId}`,
        {
            username:username
            
        }).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }
    getUserbyId(userId: number){
        return axios.get(`http://localhost:8080/user/getUserById?id=${userId}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            alert(err.message);
            console.log(err);
        });       
    }
    putPassword(password: string,userId:number){
        return axios.put(`http://localhost:8080/user/putPassword?id=${userId}`,
        {
            password:password
            
        }).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }

}

export default new UserServiceUpdate();