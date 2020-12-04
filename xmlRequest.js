export const HttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.open(method, url);
        request.responseType = 'json';

        if (data) {
            request.setRequestHeader('Content-Type', 'application/json');
        }

        request.onload = () => {
            if (request.status >= 400) {
                reject(request.response);
            } else {
                resolve(request.response);
            }
        };

        request.onerror = () => {
            reject('Quelque chose ne va pas');
        };

        request.send(JSON.stringify(data));
    });
return promise;
};



























/*
export const HttpRequest = (method,url, data) => {
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState === XMLHttpRequest.DONE) {
if (this.status === 200) {
    let response = JSON.parse(this.responseText);
} else {
    console.log(this.status, this.statusText);
}
}
};

request.open(method, url, true);
request.send(null);

}





const getData = () => {
HttpRequest('GET');
}
const sendData = () => {
HttpRequest('POST');
}
const updateData = () => {
HttpRequest('PUT');
}
*/