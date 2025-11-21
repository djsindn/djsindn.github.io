var posts=["2025/11/21/linux-httpd服务配置/","2025/11/21/hello-world/","2025/11/21/linux-dhcp搭建/","2025/11/21/openstack平台搭建及创建云主机/","2025/11/21/python爬虫-某电影网站实战/","2025/11/21/自建机场科学上网/","2025/11/21/云计算比赛私有云题目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };