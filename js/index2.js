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

    //ͼƬ�Ĺ���Ч��
    var setTransition=function(){
        //    ��ӹ���Ч��
        imgbox.style.transition="all 0.5s";
        imgbox.style.webkitTransition="all 0.5s";
    }

    //ͼƬ���ֲ�ͼЧ��
    var setTranslateX= function (x) {
        //    �����ֲ�ͼ
        imgbox.style.transform="translateX("+x+"px)";
        imgbox.style.webkitTransform="translateX("+x+"px)";
    }
    //��ʱ���ķ�װ����
    var turn=function(){
        index++;
        var left=-index*banWid;
        setTransition();
        setTranslateX(left);
        setPoints(index);
    }
    //ɾ��ͼƬ�Ĺ���Ч��
    var removeTransition= function () {
        imgbox.style.transition="none";
        imgbox.style.webkitTransition="none";
    }
    var timer=setInterval(turn,2000);

//    ����imgBox�Ĺ�������¼� ����ִ����� �ж��Ƿ�Խ��
     imgbox.addEventListener('transitionEnd',function(){
        //�ж������Ƿ�Խ��
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
        //   �Ǳ�ı��¼�
    function  setPoints(index){
        for(var i=0;i<points.length;i++){
            points[i].classList.remove('current');
        }
        points[index-1].classList.add('current');
    }
//    �����¼�
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
        //��������
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