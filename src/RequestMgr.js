import axios from 'axios';

let targetUrl = "http://7207-14-231-124-1.ngrok.io";
// let targetUrl = "http://localhost:2000";

class RequestMgr {
    constructor() {
        console.log("INITED");
    }

    sendAddPost(excerpt, title, content) {
        console.log(excerpt, title, content);
        return axios({
            url: `${targetUrl}/posts/create`,
            method: "post",
            data: {
                "excerpt": excerpt,
                "title": title,
                "content": content,
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    sendAddTag(tagName) {
        return axios({
            url: `${targetUrl}/tags/create`,
            method: "post",
            data: {
                "tagName": tagName
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    sendAddPostTag(tagID, postID) {
        return axios({
            url: `${targetUrl}/posts/${postID}/add-tag`,
            method: "post",
            data: {
                "tagID": tagID,
                "postID": postID
            }
        });
    }

    getAllPost() {
        return axios({
            url: `${targetUrl}/posts`,
            method: "get",
            responseType: "json",
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    getAllComment(postID) {
        return axios({
            url: `${targetUrl}/posts/${postID}/comments`,
            method: "get",
            responseType: "json",
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }

    getAllPostWithTag() {
        return axios({
            url: `${targetUrl}/posts/postsHasTag`,
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

    getRating(postID) {
        return axios({
            url: `${targetUrl}/posts/${postID}/avgrating`,
            method: "post",
            data: {
                "postID": postID
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }
}
var requestMgr = new RequestMgr();
export { requestMgr };