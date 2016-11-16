/**
 * Created by GZYJ on 2016/10/29.
 */
window.onload=function(){
    setHeader();
    downTime();
    banner();
}
function setHeader(){
    var opactity=0;
    var header=document.querySelector(".header-in");
    var banner=document.querySelector(".jd-banner");

    var H=banner.offsetHeight;
    window.onscroll= function () {
        var top=document.body.scrollTop;
        if(top<H){
            opacity=top/H*0.85;
        }else{
            opactity=0.85;
        }
        header.style.background="rgba(201,21,35,"+opacity+")";
    }
}
var spans=document.querySelectorAll( ".sk-time span");
function downTime(){
    var time=24*60*60;
    var timer=setInterval(function(){
        time--;

        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);

        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=Math.floor(h%10);

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=Math.floor(m%10);

        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=Math.floor(s%10);

        if(time<0){
            time=0;
            clearInterval(timer);
        }
    },1000);
}
function banner(){
    var ban=document.querySelector(".jd-banner");
    var imgbox=document.querySelector(".imgBox");
    var points=document.querySelectorAll(".points li");

    var banWid=ban.offsetWidth;
    var index=1;

    //图片的过渡效果
    var setTransition=function(){
        //    添加过渡效果
        imgbox.style.transition="all 0.5s";
        imgbox.style.webkitTransition="all 0.5s";
    }

    //图片的轮播图效果
    var setTranslateX= function (x) {
        //    控制轮播图
        imgbox.style.transform="translateX("+x+"px)";
        imgbox.style.webkitTransform="translateX("+x+"px)";
    }
    //定时器的封装函数
    var turn=function(){
        index++;
        var left=-index*banWid;
        setTransition();
        setTranslateX(left);
        setPoints(index);
    }
    //删除图片的过渡效果
    var removeTransition= function () {
        imgbox.style.transition="none";
        imgbox.style.webkitTransition="none";
    }
    var timer=setInterval(turn,2000);

//    监听imgBox的过渡完成事件 动画执行完成 判断是否越界
     imgbox.addEventListener('transitionEnd',function(){
        //判断数据是否越界
         if(index>=9){
             index=1;
         }
         if(index<=0){
             index=8;
         }
         var left=-index*banWid;
         removeTransition();
         setTranslateX(left);

     });
    imgbox.addEventListener('webkitTransitionEnd',function(){
        if(index>=9){
            index=1;
        }
        if(index<=0){
            index=8;
        }

        var left=-index*banWid;
        removeTransition();
        setTranslateX(left);
    });
        //   角标改变事件
    function  setPoints(index){
        for(var i=0;i<points.length;i++){
            points[i].classList.remove('current');
        }
        points[index-1].classList.add('current');
    }
//    触摸事件
    var startX=0;
    var moveX=0;
    var distanceX=0;

    ban.addEventListener('touchstart',function(e){
        startX= e.targetTouches[0].clientX;
        clearInterval(timer);
    })
    ban.addEventListener('touchmove',function(e){
        console.log(e);
        moveX= e.targetTouches[0].clientX;
        //计算距离差
        distanceX=moveX-startX;
        setTranslateX(-index*banWid+distanceX);
    })
    ban.addEventListener('touchend',function(){
        if(Math.abs(distanceX)>banWid/3){
            if(distanceX>0){
                index--;
            }
            if(distanceX<0){
                index++;
            }
        }
        var left=-index*banWid;
        setTransition();
        setTranslateX(left);
        timer=setInterval(turn,4000);

    })
}