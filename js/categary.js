/**
 * Created by GZYJ on 2016/10/29.
 */
window.onload= function () {
    leftSwipe();
    rightSwipe();
}

function leftSwipe(){
//    获取需要的元素
//    计算临界值
//    点击滑动 变色
//    通过touch滑动导航
    var leftBox=document.querySelector(".categary-left");
    var leftBoxHeight=leftBox.offsetHeight;
    
    var ul=leftBox.querySelector("ul");
    var ulHeight=ul.offsetHeight;
    var lis =ul.querySelectorAll("li");
//    定位临界值
//    最大的和最小的临界值
    var maxPosition=0;
    var minPosition=leftBoxHeight-ulHeight;
    //记录上一次移动的距离
    var currentY=0;
//    滑动的临界值
    var maxSwipe=maxPosition+150;
    var minSwipe=minPosition-150;

    var setTranslateY= function (y) {
        ul.style.transform="translateY("+y+"px)";
        ul.style.webkitTransform="translateY("+y+"px)";
    }
//    给ul添加过渡
    var addTransition= function () {
        ul.style.transition="all 0.2s";
        ul.style.webkitTransition="all 0.2s";
    }
//    点击切换导航位置
    itcast.tap(leftBox, function (e) {
        var target= e.target;
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("current");
        //    给页面中的li添加索引值
            lis[i].index=i;
        }
        target.classList.add("current");
        console.log(target.index);

        var top=-target.index*50;
        //边距检测
        if(top>maxPosition){
            top=maxPosition;
        }
        if(top<minPosition){
            top=minPosition;
        }
        //记录ul的当前位置
        currentY=top;

        //添加过渡
        addTransition();
        setTranslateY(top);
    })

//    通过touch触屏让ul跟随滑动
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener("touchstart", function (e) {
        startY= e.targetTouches[0].clientY;
    })
    leftBox.addEventListener("touchmove", function (e) {
        moveY= e.targetTouches[0].clientY;
        distanceY=moveY-startY;

    // 让ul跟随手指移动
    //    在滑动之前判断数据是否超出滑动的临界值
        if(currentY+distanceY<maxSwipe&&currentY+distanceY>minSwipe){
            //    用上一次的位置加上当前的距离差
            setTranslateY(currentY+distanceY);
        }
    })

    leftBox.addEventListener("touchend", function (e) {
    //  记录上一次移动的距离
        currentY+=distanceY;

    //   通过currentY来判断当前的ul位置是否超出最大最小的定位临界位置
        if(currentY>maxPosition){
            currentY=maxPosition;
        }
        if(currentY<minPosition){
            currentY=minPosition;
        }
        //重新设置ul的位移
        addTransition();
        setTranslateY(currentY);

    //    数据充值
        startY=0;
        moveY=0;
        distanceY=0;
    })
}

function rightSwipe(){
//    获取需要的元素
//    计算临界值
//    点击滑动 变色
//    通过touch滑动导航
    var leftBox=document.querySelector(".categary-right");
    var leftBoxHeight=leftBox.offsetHeight;

    var ul=leftBox.querySelector(".categary-in");
    var ulHeight=ul.offsetHeight;
//    定位临界值
//    最大的和最小的临界值
    var maxPosition=0;
    var minPosition=leftBoxHeight-ulHeight;
    //记录上一次移动的距离
    var currentY=0;
//    滑动的临界值
    var maxSwipe=maxPosition+150;
    var minSwipe=minPosition-150;

    var setTranslateY= function (y) {
        ul.style.transform="translateY("+y+"px)";
        ul.style.webkitTransform="translateY("+y+"px)";
    }
//    给ul添加过渡
    var addTransition= function () {
        ul.style.transition="all 0.2s";
        ul.style.webkitTransition="all 0.2s";
    }

//    通过touch触屏让ul跟随滑动
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener("touchstart", function (e) {
        startY= e.targetTouches[0].clientY;
    })
    leftBox.addEventListener("touchmove", function (e) {
        moveY= e.targetTouches[0].clientY;
        distanceY=moveY-startY;

        // 让ul跟随手指移动
        //    在滑动之前判断数据是否超出滑动的临界值
        if(currentY+distanceY<maxSwipe&&currentY+distanceY>minSwipe){
            //    用上一次的位置加上当前的距离差
            setTranslateY(currentY+distanceY);
        }
    })

    leftBox.addEventListener("touchend", function (e) {
        //  记录上一次移动的距离
        currentY+=distanceY;

        //   通过currentY来判断当前的ul位置是否超出最大最小的定位临界位置
        if(currentY>maxPosition){
            currentY=maxPosition;
        }
        if(currentY<minPosition){
            currentY=minPosition;
        }
        //重新设置ul的位移
        addTransition();
        setTranslateY(currentY);

        //    数据充值
        startY=0;
        moveY=0;
        distanceY=0;
    })
}