import axios from 'axios';

// let targetUrl = "http://2ac0-180-93-12-143.ngrok.io";
let targetUrl = "http://localhost:2000";

class RequestMgr {
    constructor() {
        console.log("INITED");
    }

    sendAddPost(excerpt, title, content) {
        console.log(excerpt, title, content);
        return axios({
            url: targetUrl,
            method: "post",
            data: {
                "cmd" : 2,
                "excerpt": excerpt,
                "title": title,
                "content": content,
                "slug": 'slug'
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    sendAddTag(tagName) {
        return axios({
            url: targetUrl,
            method: "post",
            data: {
                "cmd": 1,
                "tagName": tagName
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    sendAddPostTag(tagID, postID) {
        return axios({
            url: targetUrl,
            method: "post",
            data: {
                "cmd": 3,
                "tagID": tagID,
                "postID": postID
            }
        });
    }

    getAllPost() {
        return axios({
            url: targetUrl,
            method: "get",
            responseType: "json",
            params: {
                "cmd": 5 
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    getAllPostWithTag() {
        return axios({
            url: targetUrl,
            method: "get",
            responseType: "json",
            params: {
                "cmd": 7 
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }
}
var requestMgr = new RequestMgr();
export { requestMgr };