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
  // 请求地址封装管理
  // 设置请求服务器根路径 用于后续完整 url 的拼接
  const baseURL ='http://localhost:8080/api/v1';
  
  const urls = {

     userinfo: baseURL+'/admin/user/info',
     usedetail: baseURL+'/admin/user/detail',
     userlogin: baseURL+'/admin/user/login',
     useredit: baseURL+'/admin/user/edit',
  }
  // 将 urls 对象暴露到全局作用域
  window.urls = urls;
})(window);
