/**
 * Created by GZYJ on 2016/10/30.
 */
//�����ռ�   ����Ϊ��������32
var itcast={
    //�����Ӱ󶨹����¼�
    //box ���¼��Ķ���
    //callback ���ɽ����¼� ������ִ�в���
    addTransitionEnd:function(box,callback){
    //    �ж��û����ݵ��Ƿ���һ������
        if(box&&typeof(box)=="object"){
        //    ˵��box�ǿ��õ�
        //    �����ǵ�box���¼�
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

    //tap�¼�
    //box ���¼�����
    //callback tap�¼�����֮�� ִ�в���
    tap:function(box,callback){
        if(box&&typeof(box)=='object'){
            var  startTime=0;
            var isMove=false;

            box.addEventListener('touchstart',function(){
                // ��ȡʱ���
                startTime=Date.now();
            })

            box.addEventListener('touchmove',function(){
                isMove=true;
            })

            box.addEventListener('touchend',function(e){
                //     �ж��Ƿ�Ϊ����¼�
                if(!isMove&&Date.now()-startTime<150){
                    //     ִ�е��ʱ�����߼�
                    callback&&callback(e);
                }
                //    ��������
                isMove=false;
                startTime=0;
            });
        }
    }
}