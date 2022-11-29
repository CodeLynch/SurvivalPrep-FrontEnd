import axios from "axios";

//const USER_BASE_URL = "http://localhost:8080/user/postUser"

class UserService{

    postUser(fname: string, lname: string, username: string, email:string, community: number, pass:string, contactno:string){
        return axios.post("http://localhost:8080/user/postUser",
        {
            username: username,
            firstname: fname,
            lastname: lname,
            email: email,
            password: pass,
            contactno: contactno,
            community: { "communityid": community },
        }).then((res)=>{
                if(res.data){
                alert("Registration Successful!");
                return res.data;
            }
        }).catch(err =>{
            console.log(err);
        });
    }
}

export default new UserService();