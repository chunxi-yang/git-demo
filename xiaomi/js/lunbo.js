window.onload=function(){
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];

var index = 0; //表示第几张图片

//清除类里面的 active
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}

//将 active 给不同的 li 实现出轮播效果
var goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}

//如果 index 大于 图片数那么要变回 0
var goNext = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPrev = function () {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}

//点击 下一个 将换图片
next.addEventListener('click', function () {
    goNext();
})

prev.addEventListener('click', function () {
    goPrev();
})

// 点击小点跳到对应的图片
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    })
}

setInterval(goNext, 3000);
}


//--------------------------------------------------------
var btnTop = document.getElementById('btnTop');
//滚动窗口
window.onscroll = function(){
    //获取当前视口顶端数值
    var backTop = getScrollTop();
    //当你的滚动条滚动距离大于20的时候
    if(backTop >= 20){
        btnTop.style.display = 'block';
    }else{
        btnTop.style.display = 'none';
    }
}


//获取当前视口顶端数值
function getScrollTop(){
    //做一个判断 兼容ie浏览器
    var sTop;
    if(document.compatMode == "BackCompat"){
        sTop = document.body.scrollTop;
    }else{
        sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;

    }
    return sTop;
}

// 图片点击效果
btnTop.onclick = function() {
    //每30毫秒执行以下这个函数
    var timer = setInterval(function(){
        var backTop = getScrollTop();
        // 每30毫秒减少至自己顶
        var spendTop = backTop / 10;
        //修改当前的视口的数值 产生向上活动的效果
        setScrollTop(backTop - spendTop);
        if(backTop == 0){
            //结束函数执行
            clearInterval(timer);
        }
    },100)
    
}

// 设置当前视口的顶端数值
function setScrollTop(top){
    if(document.compatMode == "BackCompat"){
        document.body.scrollTop = top;
    }else{
        if(document.documentElement.scrollTop == 0){
            document.body.scrollTop = top;
        }else{
            document.documentElement.scrollTop = top;
        }
    }
}

//-----------------------------------------
// function showTime () {
//     //获取当前时间
//     var date = new Date();
//     var now = date.getTime();				
//     var endDate = new Date("2021,1,1");//设置截止时间
//     var end = endDate.getTime();
//     var leftTime = (end - now)/1000; //时间差

//     // 一天等于60*60*24 秒
//     var leftDay = leftTime/(60*60*24);
//     leftDay = Math.floor(leftDay);

//     // 60*60%24就是小时
//     var leftHour = leftTime/(60*60)%24;
//     leftHour = Math.floor(leftHour);

//     // 分钟
//     var leftM = leftTime/60%60;
//     leftM = Math.floor(leftM);

//     // 秒
//     var leftS = leftTime%60;
//     leftS = Math.floor(leftS);


//     timer.innerHTML = leftDay+"天"+leftHour+"小时"+leftM+"分钟"+leftS+"秒";

//     if(leftDay==0&&leftHour==0&&leftM==0&&leftS==0) {
//         clearInterval(stop);
//     }
// }
// showTime();
// // 每隔一秒执行showTime一次
// var stop=setInterval(showTime,1000);