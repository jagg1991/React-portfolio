import axios from "axios";

const BASEURL = "https://api.github.com/users/jagg1991/repos?type,page,per_page,sort";




// eslint-disable-next-line import/no-anonymous-default-export
const API = {
    search: function () {
        return axios.get(BASEURL);
    }
};

export default API;
