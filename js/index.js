/**
 * Created by GZYJ on 2016/10/28.
 */
window.onload=function(){
    setHeader();
    downTime();
    banner();
}
var spans=document.querySelectorAll(".sk-time span");
function setHeader(){
    var opacity=0;
    var header=document.querySelector(".header-in");
    var banner=document.querySelector(".jd-banner");
    //获取banner的盒子高度
    var H=banner.offsetHeight;

    window.onscroll=function(){
        var top=document.body.scrollTop;
        if(top<H){
            opacity=top/H*0.85;
        }else{
            opacity=0.85;
        }
        header.style.background="rgba(201,21,35,"+opacity+")";
    }
}

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
/*控制banner触摸滑动*/
function banner(){
    //获取所需要的标签
    //通过定时器控制轮播图
    //角标控制
    //边界检测
    //滑动切换轮播图
    //如果滑动距离小于屏幕宽度1/3 吸附回去
    //大于1/3 切换图片
    var ban=document.querySelector(".jd-banner");
    var imgBox=document.querySelector(".imgBox");
    var points=document.querySelectorAll(".points li");
    //获取banner宽度
    banWid=ban.offsetWidth;
    // index存放当前索引值
    var index=1;
    //定时器模块


    var timer=setInterval(function(){
        index++;
        var left=-index*banWid;
    //    切换前添加过渡效果
        imgBox.style.transition="all 0.5s";
        imgBox.style.webkitTransition="all 0.5s";
    //    切换轮播图 用css3实现
        imgBox.style.transform="translateX("+left+"px)";
    //    兼容webkit内核浏览器
    //    -webkit- -o- -ms- -moz-
        imgBox.style.webkitTransform="translateX("+left+"px)";
        // 让角标同步
        //   排他
        setPoints(index-1);
    },3000);


        //监听imgBox的过渡完成事件 动画执行完成 判断数据是否越界
        imgBox.addEventListener("transitionEnd",function(){
            if(index>=9){
                index=1;
            //快速跳转
                var left=-index*banWid;
                //删除过渡效果
                imgBox.style.transition="none";
                imgBox.style.webkitTransition="none";
                imgBox.style.transform="translsteX("+left+"px)";
                imgBox.style.webkitTransform="translateX("+left+"px)";
            }
            if(index<=0){
                index=8;
            }
    })
        imgBox.addEventListener("webkitTransitionEnd",function(){
        if(index>=9){
            index=1;
            //快速跳转
            var left=-index*banWid;
            imgBox.style.transition="none";
            imgBox.style.webkitTransition="none";
            imgBox.style.transform="translsteX("+left+"px)";
            imgBox.style.webkitTransform="translateX("+left+"px)";
        }
        if(index<=0){
            index=8;
        }
    })
        //----------角标改变事件-------------
        function setPoints(index){
        for(var i=0;i<points.length;i++){
            points[i].classList.remove("active");
        }
        points[index].classList.add("active");
    }
        //--------------触屏滑动操作---------
        var startX=0;
        var moveX=0;
        var distanceX=0;
        ban.addEventListener("touchstart",function(e){
            //记录起始位置
            startX= e.targetToches[0].clientX;
        })
        ban.addEventListener("touchmove", function (e) {
           moveX= e.targetTouches[0].clientX;
        //    计算距离差
            distanceX=moveX-startX;
            distanceX=-index*banWid-distanceX;
        //    imgBox跟随鼠标移动
            imgBox.style.transform="translsteX("+(distanceX)+"px)";
            imgBox.style.webkitTransform="translateX("+distanceX+"px)";
        })
        ban.addEventListener("touchend", function (e) {
        //    imgBox要吸附回去或者切换图片
        //    如果滑动的距离大于屏幕宽度的三分之一
            if(Math.abs(distanceX)>banWid/3){
                if(distanceX>0){
                //    上一张
                    index--;
                }
                if(distanceX<0){
                //    下一张
                    index++;
                }
            }
            var left=-index*banWid;
            imgBox.style.transform="translsteX("+left+"px)";
            imgBox.style.webkitTransform="translateX("+left+"px)";
        })
}
