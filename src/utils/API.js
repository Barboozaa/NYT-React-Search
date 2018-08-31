import axios from "axios";

const api = {
    getArticles: function (query, begin, end) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const APIKEY = "?api-key=53d5298596b7461ca93b1f4a86c40cb9";
        if (begin === "" && end === "") {
            return axios.get(BASEURL + APIKEY + "&q=" + query);
        } else if (begin === "" && end !== "") {
            return axios.get(BASEURL + APIKEY + "&q=" + query + "&end_date=" + end + "0101");
        } else if (begin !== "" && end === "") {
            return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "0101");
        } else {
            return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "0101&end_date=" + end + "0101");
        }
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    deleteArticle: function (id) {
        return axios.delete(`/api/saved/${id}`);
    }
};

export default api;

