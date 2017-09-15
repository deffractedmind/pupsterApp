import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";
const APIKEY = "&apikey=40e9cece";

if path is /discover, then BASEURL + random
discover
search

export default {
  search: function(query) {
    // return axios.get(BASEURL + query + APIKEY);
    return axios.get(BASEURL + query);
  }
};