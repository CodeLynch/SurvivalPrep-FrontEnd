import axios from "axios";

const TIPS_BASE_URL = "http://localhost:8080/post/postPost"

class PostService {
    postPost(PostContent: string) {
        return axios.post("http://localhost:8080/post/postPost", {
            Postcontent: PostContent
        }).then((res) => {
            console.log(res.data);
            if (res.data) {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }
    deletePost(postId:number){
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