/**
 * Created by GZYJ on 2016/10/29.
 */
window.onload= function () {
    var del=document.querySelectorAll(".option .pull-right");
    var wrap=document.querySelector(".wrap");

    var submit=document.querySelector(".wrap .submit");

//    ���������Ͱʱ ģ̬����ʾ����
    for(var i=0; i<del.length;i++){
        del[i].onclick= function () {
            var up=this.querySelector(".up");

            up.classList.toggle("open");

            wrap.style.display='block';
            wrap.classList.add("bounceDown");
        }
    }
//    �����ȷ����ťʱ ģ̬����ʧ ����Ͱ�ر�
    submit.onclick= function () {
        wrap.style.display='none';
        for(var i=0;i<del.length;i++){
            var up=del[i].querySelector('.up');
            //ɾ��open�����ʽ
            up.classList.remove('open');
        }
    }
}