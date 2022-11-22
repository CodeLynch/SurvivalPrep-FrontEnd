import axios from "axios";

//const USER_BASE_URL = "http://localhost:8080/user/postUser"

class UserService{

    postUser(fname: string, lname: string, username: string, email:string, community: number, pass:string, contactno:string){
        //get community by ID first then assign result to a variable
        //axios.get()

        //use community variable in community param
        return axios.post("http://localhost:8080/user/postUser",
        {
            username: username,
            firstname: fname,
            lastname: lname,
            email: email,
            password: pass,
            contactno: contactno,
            community: community
        }).then((res)=>{
            console.log(res);
            if(res.data){
                alert("User Created!");
            }
        }).catch(err =>{
            console.log(err);
        });
    }
}

export default new UserService();