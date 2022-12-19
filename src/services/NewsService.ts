


import axios from "axios";

class NewsService{

    getNews(){
        return axios
        .get("https://newsapi.org/v2/top-headlines?country=ph&pageSize=9&apiKey=994ed3079544468199bb2a308562063e")
        .then((res)=>{
            return res.data;
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

export default new NewsService();