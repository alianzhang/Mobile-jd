/**
 * Created by GZYJ on 2016/10/30.
 */
//命名空间   类型为对象类型32
var itcast={
    //给盒子绑定过渡事件
    //box 绑定事件的对象
    //callback 过渡结束事件 触发后执行操作
    addTransitionEnd:function(box,callback){
    //    判断用户传递的是否是一个对象
        if(box&&typeof(box)=="object"){
        //    说明box是可用的
        //    给我们的box绑定事件
            box.addEventListener("transitionEnd",function(){
               //if(callback){
               //    callback();
               //}
               callback&&callback();
            });
            box.addEventListener("webkitTransitionEnd",function(){
                //if(callback){
                //    callback();
                //}
                callback&&callback();
            });
        }
    },

    //tap事件
    //box 绑定事件对象
    //callback tap事件触发之后 执行操作
    tap:function(box,callback){
        if(box&&typeof(box)=='object'){
            var  startTime=0;
            var isMove=false;

            box.addEventListener('touchstart',function(){
                // 获取时间戳
                startTime=Date.now();
            })

            box.addEventListener('touchmove',function(){
                isMove=true;
            })

            box.addEventListener('touchend',function(e){
                //     判断是否为点击事件
                if(!isMove&&Date.now()-startTime<150){
                    //     执行点击时间多的逻辑
                    callback&&callback(e);
                }
                //    数据重置
                isMove=false;
                startTime=0;
            });
        }
    }
}