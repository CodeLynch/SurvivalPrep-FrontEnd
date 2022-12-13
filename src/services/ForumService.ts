import axios from "axios";

class ForumService{

    postForum(forumTitle:string, forumDesc:string, communityId:number, userId: number){
        return axios.post("http://localhost:8080/forum/postForum",
        {forumtitle: forumTitle,
         forumdesc: forumDesc,
         creator:{
            userid: userId
         },
         community:{
            communityid: communityId
         }
        }).then((res) => {
            return res.data
         }).catch((err) =>{
            alert(err.message)
         })
    }

    async getForumById(forumid: number){
        try {
            const res = await axios.get(`http://localhost:8080/forum/getForumById?id=${forumid}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    putForum(forumid: number, forumTitle:string, forumDesc: string){
        return(
            axios.put(`http://localhost:8080/forum/putForum?id=${forumid}`,{
                forumtitle: forumTitle,
                forumdesc: forumDesc
            }).then((res)=>{
                return res.data;
            }).catch((err) =>{
                console.log(err);
            })
        );
    }

    async getCommunityForums(communityid: number){
        try {
            const res = await axios.get(`http://localhost:8080/forum/getAllForumsByCommunity?communityid=${communityid}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteForum(forumId: number){
        try {
            const res = await axios.delete(`http://localhost:8080/forum/deleteForum/${forumId}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export default new ForumService();