/**
 * Created by GZYJ on 2016/10/29.
 */
window.onload= function () {
    var del=document.querySelectorAll(".option .pull-right");
    var wrap=document.querySelector(".wrap");

    var submit=document.querySelector(".wrap .submit");

//    当点击垃圾桶时 模态框显示出来
    for(var i=0; i<del.length;i++){
        del[i].onclick= function () {
            var up=this.querySelector(".up");

            up.classList.toggle("open");

            wrap.style.display='block';
            wrap.classList.add("bounceDown");
        }
    }
//    当点击确定按钮时 模态框消失 垃圾桶关闭
    submit.onclick= function () {
        wrap.style.display='none';
        for(var i=0;i<del.length;i++){
            var up=del[i].querySelector('.up');
            //删除open类的样式
            up.classList.remove('open');
        }
    }
}