var player = $('#player')[0];
$("#music").on("click",function (){
    if(player.paused){
        player.play();
        $("#music").css("background-image","url(images/jtbq_013.png)")
    }else{
        player.pause();
        $("#music").css("background-image","url(images/jtbq_014.png)")
    }
});

function setCookie(key,value,time){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+time);
    document.cookie=key+"="+encodeURI(value)+";expires="+oDate.toGMTString();
}
function getCookie(key){
    var arr1 = document.cookie.split("; ");
    for(var i=0;i<arr1.length;i++){
        var arr2 = arr1[i].split("=");
        if(arr2[0]==key){
            return decodeURI(arr2[1]);
        }
    }
}
function removeCookie(key){
    setCookie(key,"",-1);
}


//页面一加载完成,就判断有没有cookie
if(getCookie('username')){
    $('#firstlogin a').html(getCookie('username'));
}else{
    $('#firstlogin a').html('请先登录');
}

$('#firstlogin a').on("click",function (){
    if(confirm("are you sure")){
        removeCookie("username");
        removeCookie("pwd");
        self.location="http://localhost:63342/webstrom%E7%9A%84%E9%A1%B9%E7%9B%AE/1-%E7%88%B1%E6%97%85%E6%B8%B8/register.html";
    }
});



var Height = $(".nav").height();
$(window).scroll(function (){
    var docScrollTop = $(document).scrollTop();
    if(docScrollTop>Height){
        $(".navbar").css({
            position:"fixed",
            background:"rgba(0,0,0,0.7)",
            top:"0"
        });
        $(".navbar").children("ul").children("li").children("a").css({
            color:"white"
        })
    }else {
        $(".navbar").css({
            background:"",
            position:"static"
        });
        $(".navbar").children("ul").children("li").children("a").css({
            color:"gray"
        })
    }
})