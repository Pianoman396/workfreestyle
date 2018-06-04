(function() {
    var request;
    window.Async = function() {
        return {
            begin: function(){
               try {
                  // Opera 8.0+, Firefox, Safari
                  request = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     request = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                     }catch (e){
                        // Something went wrong
                        alert("Your browser is old, recomend update it!");
                        return false;
                     }
                  }
               }
               // request = new XMLHttpRequest() || new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
            },
            open: function(method, url, bool) {
                // const request = new XMLHttpRequest();
               request.open(method, url, bool);
            },
            contentType: function(app = null) {
               request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
               request.setRequestHeader("Content-type", app === null ? "application/x-www-form-urlencoded" : app);
                // request.setRequestHeader("Connection", "close");
            },
            send: function(content = null) {
               request.send(content === null ? null : content);
               return;
            },
            response: function(where) {
                let sec = document.querySelector(where);
                request.onreadystatechange = function() {
                    if (request.readyState === 4 && request.status === 200) {
                        sec.innerHTML += request.responseText;
                    } else {
                        // alert(xhr.status + ': ' + xhr.statusText);
                        sec.innerHTML = "Loading...";
                    }
                }

            }
        };
    };
}());

// function postAjax(url, data, success) {
//         var params = typeof data == 'string' ? data : Object.keys(data).map(
//                 function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
//             ).join('&');

//         var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//         xhr.open('POST', url, true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 && xhr.status === 200) { success(xhr.responseText); }
//         };
//         xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         xhr.send(params);
//         return xhr;
// }

window.addEventListener("load", function() {
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop <= 600 && scrollTop > 450 ) {
            document.querySelector("#head").style.transitionDuration = "0.8s";
            document.querySelector("#head").style.backgroundColor = "purple";
            document.querySelector("#head").style.textColor = "snow";
        }else{
            document.querySelector("#head").style.backgroundColor = "#f1f1f1";
            document.querySelector("#head").style.color = "hsla(257, 39%, 7%, 1)";
        }
    });
});
