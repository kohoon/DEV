var http = new XMLHttpRequest();
var url = 'http://127.0.0.1:3000/sub';
var params = '';
http.open('GET', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'text/plain');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
    }
}
http.send(params);