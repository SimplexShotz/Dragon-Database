function getAjax(url, success) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status === 200) success(xhr.responseText);
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();
  return xhr;
}
function request(query, callback) {
  getAjax("https://cors-anywhere.herokuapp.com/https://Dragon-Database.simplexshotz.repl.co/?" + query, callback);
}
class DragonDatabase {
  constructor() {
  }
  createDatabase(name, callback) {
    request("action=create&data=" + name, function(res) {
      if (res === "") {
        callback();
      } else {
        callback(res);
      }
    });
  }
}
(function(){
  console.log("Database Installed!");
})();
