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
(function(){
  console.log("Database Installed!");
  getAjax("https://cors-anywhere.herokuapp.com/https://Dragon-Database.simplexshotz.repl.run/?a=1", function(data) {
    console.log(data);
  });
})();
