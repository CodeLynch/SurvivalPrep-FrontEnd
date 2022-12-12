import axios from "axios";

class ForumService{

    // postInvite(familyid:number, inviteeid:number, inviterid:number){
    //     return axios.post("http://localhost:8080/invite/postInvite",
    //     {family:{ "familyid": familyid},
    //      inviter:{ "userid": inviterid},
    //      invitee:{ "userid": inviteeid}})
    //      .then((res) => {
    //         return res.data
    //      }).catch((err) =>{
    //         alert(err.message)
    //      })
    // }
    async getCommunityForums(communityid: number){
        try {
            const res = await axios.get(`http://localhost:8080/forum/getAllForumsByCommunity?communityid=${communityid}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export default new ForumService();