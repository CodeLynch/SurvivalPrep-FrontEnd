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
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    putInviteAccept(inviteid: number){
        return axios.put(`http://localhost:8080/invite/putIsAccepted?id=${inviteid}`,
        { "isaccepted": true}).then((res)=>{
            console.log("putaccept method",res.data);
            return res.data
        }).catch((err)=>{
            alert(err.message);
        })
    }

    deleteInvite(inviteid: number){
        return axios.delete(`http://localhost:8080/invite/deleteInvite/${inviteid}`).then((res)=>{
            console.log("deleteinvite method",res.data);
            return res.data
        }).catch((err)=>{
            alert(err.message);
        })
    }

}

export default new InviteService();