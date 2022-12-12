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

}
export default new ThreadService();