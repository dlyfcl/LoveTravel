//---显示
function show(obj) {
	obj.style.display = "block";
}
//---隐藏
function hide(obj) {
 obj.style.display = "none";
}
//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);

        var val = target - obj.offsetLeft;
        ele.style.top = ele.offsetLeft + step + "px";
        if(Math.abs(val)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },25);
}
//---scroll封装
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}


function getFirstNode(ele){
     return ele.firstElementChild || ele.firstChild;
}

function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}
//--给定元素和索引值查找指定索引值的兄弟元素节点，包含自己

function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

//--给定元素查找他的所有兄弟元素，不包含自己

function getAllSiblings(ele,index){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr[index];
}
