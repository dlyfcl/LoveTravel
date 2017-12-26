function $(id){
    return document.getElementById(id);
}
// - - - box - - -常规  - - - - 出错 box.error - - - 正确 box.right - - - - - -
// - - - tip - - - 默认 - - - - 出错 tip.error - - - 正确 tip.right - - - - - -
var regs = {
    // - - - 用户名 :- - 字母， 数字，中文，_  {4,20}
    userNameReg:/^(([\u4e00-\u9fa5])|[a-zA-Z0-9]){4,20}$/,
    // pwd  {6,20}字符
    pwdReg:/^.{6,20}$/,
    // 邮箱 @前面  有可能是下面的情况
    // 1 纯字母
    // 2 纯数字
    // 3 字母数字结合
    // 4，带点的   ajay.sina.@sina.com
    // 5 下划线  ajay_yang@vip.163.com
    // 6 连接符   ajay_yang@net-163.com
    emailReg:/^[a-zA-Z\d]+([-_.][a-zA-Z\d]+)*@([a-zA-Z\d]+[-.])+[a-zA-Z\d]{2,5}$/
};
var userName = $("register-email");
var pwd = $("register-pwd");
var pwd2 = $("register-pwd2");
var ck = $("ck");
var btn = $("register");

// 用户名
userName.onkeyup = userName.onfocus = userName.onblur = function (ev){
    var Event = ev||window.event;
    checkUserName(Event);
};
function checkUserName(Event){
    // 判断事件类型
    var type;
    if(Event){
        type = Event.type;
    }
    var  value = userName.value;
    var box = userName.parentNode;
    var tip = box.parentNode.children[1];
    var span = tip.children[1];
    // 获得了焦点
    if(type == "focus"){
        if(value == ""){
            box.className = "box";
            tip.className = "tip default";
            span.innerHTML = "用户名为邮箱账号";
            return false;
        }
    }
    // 失去焦点
    if(type == "blur"){
        if(value == ""){
            box.className = "box";
            tip.className = "tip hide";
            return false;
        }
    }
    // 出错情况
    if(value == ""){
        box.className = "box error";
        tip.className = "tip error";
        span.innerHTML = "用户名不能为空";
        return false;
    }else if(regs.emailReg.test(value)){
        box.className = "box right";
        tip.className = "tip right";
        span.innerHTML = "用户名可用";
        return true;
    }else{
        box.className = "box error";
        tip.className = "tip error";
        span.innerHTML = "您的格式不对";
        return false;
    }
}
// 设置密码
pwd.onkeyup = pwd.onfocus = pwd.onblur = function (ev){
    var Event = ev||window.event;
    checkPwd(Event);
};
function checkPwd(Event){
    //---判断事件类型
    var type;
    if(Event){
        type = Event.type;
    }
    var value = pwd.value;
    var box = pwd.parentNode;
    var tip = box.parentNode.children[1];
    var span = tip.children[1];
    if(type=='focus'){
        if(value==''){
            box.className='box';
            tip.className='tip default';
            span.innerHTML = '建议使用字母、数字和符号的组合，6-20位';
            return false;
        }
    }
    if(type=='blur'){
        if(value==''){
            box.className='box';
            tip.className='tip hide';
            return false;
        }
    }
    //---出错情况
    if(value==''){
        box.className='box error';
        tip.className='tip error';
        span.innerHTML = '密码不能为空';
        return false;
    }else if(regs.pwdReg.test(value)){
        box.className = "box right";
        tip.className = "tip right";
        span.innerHTML = "密码可用";
        return true;
    }else{
        box.className = "box error";
        tip.className = "tip error";
        span.innerHTML = "您的格式不对";
        return false;
    }
}

//  确认密码
pwd2.onkeyup=pwd2.onfocus=pwd2.onblur = function(ev){
    var Event = ev||window.event;
    checkPwd2(Event);
};
function checkPwd2(Event){
    var type;
    if(Event){
        type = Event.type;
    }
    var value1 = pwd.value;
    var value = pwd2.value;
    var box = pwd2.parentNode;
    var tip = box.parentNode.children[1];
    var span = tip.children[1];
    if(type=='focus'){
        if(value==''){
            box.className='box';
            tip.className='tip default';
            span.innerHTML = '请再次输入密码';
            return false;
        }
    }
    if(type=='blur'){
        if(value==''){
            box.className='box';
            tip.className='tip hide';
            return false;
        }
    }
    //---出错情况
    if(value==''){
        box.className='box error';
        tip.className='tip error';
        span.innerHTML = '请再次输入密码';
        return false;
    }else if(value == value1){
        box.className='box right';
        tip.className='tip hide';
        return true;
    }else{
        box.className='box error';
        tip.className='tip error';
        span.innerHTML = '两次密码输入不一致';
        return false;
    }
}
function setCookie(key,value,time){
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + time);
    document.cookie=key+'='+encodeURI(value)+';expires='+oDate.toGMTString();
}
//---表单提交
function checkData(){
    if(checkUserName()&&checkPwd()&&checkPwd2()){
        setCookie('username',$('#register-email').val(),5);
        setCookie('pwd',$('#register-pwd').val(),5);
        self.location='http://localhost:63342/webstrom%E7%9A%84%E9%A1%B9%E7%9B%AE/1-%E7%88%B1%E6%97%85%E6%B8%B8/index.html?_ijt=qvi24p0ergo00p883np2esak17';
        return true;
    }else{
        alert('填写格式有误，请重新输入');
        return false;
    }
}



