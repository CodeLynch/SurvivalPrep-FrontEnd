import axios from "axios";

class PostService {
    postPost(PostContent: string) {
        return axios.post("http://localhost:8080/post/postPost", {
            Postcontent: PostContent
        }).then((res) => {
            console.log("post post", res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    async postThreadPost(PostContent: string, threadId: number, userId: number) {
        return axios.post("http://localhost:8080/post/postPost", {
            postcontent: PostContent,
            thread:{
                threadid:threadId
            },
            creator:{
                userid:userId
            }
        }).then((res) => {
            console.log("post thread post", res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    async getThreadPosts(threadid: number){
        return axios.get(`http://localhost:8080/post/getAllPostsByThread?id=${threadid}`)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    async deletePost(postId:number){
        return axios.delete("http://localhost:8080/post/deletePost/"+postId
        ).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
export default new PostService();