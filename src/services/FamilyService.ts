import axios from "axios";


class FamilyService{

    postFamily(familyName:string, creatorId:number){
        return axios.post("http://localhost:8080/family/postFamily",
        {
            familyname: familyName,
            creator: { "userid": creatorId },
        }).then((res)=>{
                if(res.data){
                return res.data;
            }
        }).catch(err =>{
            console.log(err);
        });
    }

    getFamily(familyCode:string){
        return axios.get(`http://localhost:8080/family/getFamilyByCode?code=${familyCode}`).then((res)=>{
            return res.data;
        }).catch(err =>{
            console.log(err);
        });
    }

   
}

export default new FamilyService();