import axios from 'axios';

let targetUrl = "http://2ac0-180-93-12-143.ngrok.io";

class RequestMgr {
    constructor() {
        console.log("INITED");
    }

    sendAddPost(excerpt, title, content) {
        console.log("Send");
        axios({
            url: targetUrl,
            method: "post",
            data: {
                "cmd" : 5,
                "excerpt": excerpt,
                "title": title,
                "content": content
            }
        });
    }

    sendAddTag(tagName) {
        axios({
            url: targetUrl,
            method: "post",
            data: {
                "cmd": 1,
                "tagName": tagName
            }
        });
    }

    getAllPost() {
        axios({
            url: targetUrl,
            method: "get",
            responseType: "json",
            data: {
                "cmd": 5 
            }
        }).then(function (response) {
            console.log("here", response); 
            return response.data;
        });
    }
}
var requestMgr = new RequestMgr();
export { requestMgr };