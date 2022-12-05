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
    Login(email:string, pass:string){
        return axios.post("http://localhost:8080/user/postLogin",
        {
            email: email,
            password: pass,
        }).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }
    getUserDetails(userid:number){
        return axios.get(`http://localhost:8080/user/getUserById?id=${userid}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }
    getFamilyMembers(familyid:number){
        return axios.get(`http://localhost:8080/user/getFamilyMembers?familyid=${familyid}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });       
    }
    putFamily(userId:number, familyId:number){
        return axios.put(`http://localhost:8080/user/putFamily?id=${userId}`,
        {
            family:{
                familyid: familyId
            }
        }).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }

    // ChangeUsername(username:string){
    //     return axios.get(`http://localhost:8080/user/putUsername?id`).then((res)=>{
    //         username: username
    // })
    // }
   
}

export default new UserService();