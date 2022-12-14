import axios from "axios";

class ThreadService {
     async getThreadsofForum(forumid: number) {
        return axios.get(`http://localhost:8080/thread/getAllThreadsByForum?id=${forumid}`)
        .then((res) => {
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    async postThread(threadTitle: string, forumId: number, userId: number){
        return axios.post('http://localhost:8080/thread/postThread',{
            threadtitle: threadTitle,
            forum:{
                forumid: forumId
            },
            creator:{
                userid: userId
            }
        }).then((res)=>{
            return res.data
        }).catch((err)=>{
            console.log(err);
        })
    }

}
export default new ThreadService();