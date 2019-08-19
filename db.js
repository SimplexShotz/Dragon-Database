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
  constructor(database) {
    this.database = database;
  }
  createDatabase(name, callback) {
    request("action=create&name=" + name, function(res) {
      if (res === "") {
        callback();
      } else {
        callback(res);
      }
    });
  }
  get(callback) {
    if (this.database) {
      request("action=read&name=" + this.database, function(res) {
        res = JSON.parse(res);
        if (res.err) {
          callback(undefined, res.err);
        } else {
          callback(res.data);
        }
      });
    } else {
      callback(undefined, "This object is not attached to a database.");
    }
  }
  set(data, callback) {
    if (this.database) {
      data = encodeURI(JSON.stringify(data));
      request("action=write&name=" + this.database + "&data=" + data, function(res) {
        if (res === "") {
          callback();
        } else {
          callback(res);
        }
      });
    } else {
      callback(undefined, "This object is not attached to a database.");
    }
  }
}
(function(){
  console.log("Database Installed!");
})();
