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
            alert(err.message);
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
            alert(err.message);
            console.log(err);
        });
    }
    async getUserDetails(userid:number){
        try {
            const res = await axios.get(`http://localhost:8080/user/getUserById?id=${userid}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    getUserDetailsByContactNo(contactNo:string){
        return axios.get(`http://localhost:8080/user/getUserByNum?contactNo=${contactNo}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            alert(err.message);
            console.log(err);
        });
    }
    getFamilyMembers(familyid:number){
        return axios.get(`http://localhost:8080/user/getFamilyMembers?familyid=${familyid}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            alert(err.message);
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
            alert(err.message);
            console.log(err);
        });
    }

    leaveFamily(userId:number){
        return axios.put(`http://localhost:8080/user/putFamily?id=${userId}`,
        {
            family: null
        }).then((res)=>{
            return res.data;
        }).catch(err =>{
            alert(err.message);
            console.log(err);
        });
    }

    getPost(userId:number){
        return axios.get(`http://localhost:8080/post/getAllPostsByUser?id=${userId}`).then((res) =>{
            return res.data;
        }).catch(err =>{
            alert(err.message);
            console.log(err);
        })
    }

    deleteUser(userId:number){
        return axios.delete(`http://localhost:8080/user/deleteUser/${userId}`).then((res)=>{
            return res.data;
        }).catch((err)=>{
            alert(err.message);
            console.log(err);
        })

    }

   
   
}

export default new UserService();