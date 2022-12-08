import axios from "axios";

class InviteService{

    postInvite(familyid:number, inviteeid:number, inviterid:number){
        return axios.post("http://localhost:8080/invite/postInvite",
        {family:{ "familyid": familyid},
         inviter:{ "userid": inviterid},
         invitee:{ "userid": inviteeid}})
         .then((res) => {
            return res.data
         }).catch((err) =>{
            alert(err.message)
         })
    }
    async getInvites(userid: number){
        try {
            const res = await axios.get(`http://localhost:8080/invite/getInvitesByInvitee?id=${userid}`);
            console.log("returned invites:", res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new InviteService();