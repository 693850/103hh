var BaseUrl =  "http://125.77.166.14:2001";
var ResourceUrl = 'http://125.77.166.14:2010/ttxindasheng/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        alert('请先登录');
        window.location.href = '/index.html';
    }
}


        