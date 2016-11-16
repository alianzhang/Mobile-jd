/**
 * Created by GZYJ on 2016/10/29.
 */
window.onload= function () {
    leftSwipe();
    rightSwipe();
}

function leftSwipe(){
//    ��ȡ��Ҫ��Ԫ��
//    �����ٽ�ֵ
//    ������� ��ɫ
//    ͨ��touch��������
    var leftBox=document.querySelector(".categary-left");
    var leftBoxHeight=leftBox.offsetHeight;
    
    var ul=leftBox.querySelector("ul");
    var ulHeight=ul.offsetHeight;
    var lis =ul.querySelectorAll("li");
//    ��λ�ٽ�ֵ
//    ���ĺ���С���ٽ�ֵ
    var maxPosition=0;
    var minPosition=leftBoxHeight-ulHeight;
    //��¼��һ���ƶ��ľ���
    var currentY=0;
//    �������ٽ�ֵ
    var maxSwipe=maxPosition+150;
    var minSwipe=minPosition-150;

    var setTranslateY= function (y) {
        ul.style.transform="translateY("+y+"px)";
        ul.style.webkitTransform="translateY("+y+"px)";
    }
//    ��ul��ӹ���
    var addTransition= function () {
        ul.style.transition="all 0.2s";
        ul.style.webkitTransition="all 0.2s";
    }
//    ����л�����λ��
    itcast.tap(leftBox, function (e) {
        var target= e.target;
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("current");
        //    ��ҳ���е�li�������ֵ
            lis[i].index=i;
        }
        target.classList.add("current");
        console.log(target.index);

        var top=-target.index*50;
        //�߾���
        if(top>maxPosition){
            top=maxPosition;
        }
        if(top<minPosition){
            top=minPosition;
        }
        //��¼ul�ĵ�ǰλ��
        currentY=top;

        //��ӹ���
        addTransition();
        setTranslateY(top);
    })

//    ͨ��touch������ul���滬��
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener("touchstart", function (e) {
        startY= e.targetTouches[0].clientY;
    })
    leftBox.addEventListener("touchmove", function (e) {
        moveY= e.targetTouches[0].clientY;
        distanceY=moveY-startY;

    // ��ul������ָ�ƶ�
    //    �ڻ���֮ǰ�ж������Ƿ񳬳��������ٽ�ֵ
        if(currentY+distanceY<maxSwipe&&currentY+distanceY>minSwipe){
            //    ����һ�ε�λ�ü��ϵ�ǰ�ľ����
            setTranslateY(currentY+distanceY);
        }
    })

    leftBox.addEventListener("touchend", function (e) {
    //  ��¼��һ���ƶ��ľ���
        currentY+=distanceY;

    //   ͨ��currentY���жϵ�ǰ��ulλ���Ƿ񳬳������С�Ķ�λ�ٽ�λ��
        if(currentY>maxPosition){
            currentY=maxPosition;
        }
        if(currentY<minPosition){
            currentY=minPosition;
        }
        //��������ul��λ��
        addTransition();
        setTranslateY(currentY);

    //    ���ݳ�ֵ
        startY=0;
        moveY=0;
        distanceY=0;
    })
}

function rightSwipe(){
//    ��ȡ��Ҫ��Ԫ��
//    �����ٽ�ֵ
//    ������� ��ɫ
//    ͨ��touch��������
    var leftBox=document.querySelector(".categary-right");
    var leftBoxHeight=leftBox.offsetHeight;

    var ul=leftBox.querySelector(".categary-in");
    var ulHeight=ul.offsetHeight;
//    ��λ�ٽ�ֵ
//    ���ĺ���С���ٽ�ֵ
    var maxPosition=0;
    var minPosition=leftBoxHeight-ulHeight;
    //��¼��һ���ƶ��ľ���
    var currentY=0;
//    �������ٽ�ֵ
    var maxSwipe=maxPosition+150;
    var minSwipe=minPosition-150;

    var setTranslateY= function (y) {
        ul.style.transform="translateY("+y+"px)";
        ul.style.webkitTransform="translateY("+y+"px)";
    }
//    ��ul��ӹ���
    var addTransition= function () {
        ul.style.transition="all 0.2s";
        ul.style.webkitTransition="all 0.2s";
    }

//    ͨ��touch������ul���滬��
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener("touchstart", function (e) {
        startY= e.targetTouches[0].clientY;
    })
    leftBox.addEventListener("touchmove", function (e) {
        moveY= e.targetTouches[0].clientY;
        distanceY=moveY-startY;

        // ��ul������ָ�ƶ�
        //    �ڻ���֮ǰ�ж������Ƿ񳬳��������ٽ�ֵ
        if(currentY+distanceY<maxSwipe&&currentY+distanceY>minSwipe){
            //    ����һ�ε�λ�ü��ϵ�ǰ�ľ����
            setTranslateY(currentY+distanceY);
        }
    })

    leftBox.addEventListener("touchend", function (e) {
        //  ��¼��һ���ƶ��ľ���
        currentY+=distanceY;

        //   ͨ��currentY���жϵ�ǰ��ulλ���Ƿ񳬳������С�Ķ�λ�ٽ�λ��
        if(currentY>maxPosition){
            currentY=maxPosition;
        }
        if(currentY<minPosition){
            currentY=minPosition;
        }
        //��������ul��λ��
        addTransition();
        setTranslateY(currentY);

        //    ���ݳ�ֵ
        startY=0;
        moveY=0;
        distanceY=0;
    })
}