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
    //��ȡbanner�ĺ��Ӹ߶�
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
/*����banner��������*/
function banner(){
    //��ȡ����Ҫ�ı�ǩ
    //ͨ����ʱ�������ֲ�ͼ
    //�Ǳ����
    //�߽���
    //�����л��ֲ�ͼ
    //�����������С����Ļ���1/3 ������ȥ
    //����1/3 �л�ͼƬ
    var ban=document.querySelector(".jd-banner");
    var imgBox=document.querySelector(".imgBox");
    var points=document.querySelectorAll(".points li");
    //��ȡbanner���
    banWid=ban.offsetWidth;
    // index��ŵ�ǰ����ֵ
    var index=1;
    //��ʱ��ģ��


    var timer=setInterval(function(){
        index++;
        var left=-index*banWid;
    //    �л�ǰ��ӹ���Ч��
        imgBox.style.transition="all 0.5s";
        imgBox.style.webkitTransition="all 0.5s";
    //    �л��ֲ�ͼ ��css3ʵ��
        imgBox.style.transform="translateX("+left+"px)";
    //    ����webkit�ں������
    //    -webkit- -o- -ms- -moz-
        imgBox.style.webkitTransform="translateX("+left+"px)";
        // �ýǱ�ͬ��
        //   ����
        setPoints(index-1);
    },3000);


        //����imgBox�Ĺ�������¼� ����ִ����� �ж������Ƿ�Խ��
        imgBox.addEventListener("transitionEnd",function(){
            if(index>=9){
                index=1;
            //������ת
                var left=-index*banWid;
                //ɾ������Ч��
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
            //������ת
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
        //----------�Ǳ�ı��¼�-------------
        function setPoints(index){
        for(var i=0;i<points.length;i++){
            points[i].classList.remove("active");
        }
        points[index].classList.add("active");
    }
        //--------------������������---------
        var startX=0;
        var moveX=0;
        var distanceX=0;
        ban.addEventListener("touchstart",function(e){
            //��¼��ʼλ��
            startX= e.targetToches[0].clientX;
        })
        ban.addEventListener("touchmove", function (e) {
           moveX= e.targetTouches[0].clientX;
        //    ��������
            distanceX=moveX-startX;
            distanceX=-index*banWid-distanceX;
        //    imgBox��������ƶ�
            imgBox.style.transform="translsteX("+(distanceX)+"px)";
            imgBox.style.webkitTransform="translateX("+distanceX+"px)";
        })
        ban.addEventListener("touchend", function (e) {
        //    imgBoxҪ������ȥ�����л�ͼƬ
        //    ��������ľ��������Ļ��ȵ�����֮һ
            if(Math.abs(distanceX)>banWid/3){
                if(distanceX>0){
                //    ��һ��
                    index--;
                }
                if(distanceX<0){
                //    ��һ��
                    index++;
                }
            }
            var left=-index*banWid;
            imgBox.style.transform="translsteX("+left+"px)";
            imgBox.style.webkitTransform="translateX("+left+"px)";
        })
}
