(function(window) {
  const token = localStorage.getItem("token");
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      // debugger
      // 如果不是./login.html 登录页就统一添加请求头
      if (location.href.indexOf("./login.html") === -1) {
        //  xhr为原生的对象  所以用原生方法添加请求头
        // debugger
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
})(window);
