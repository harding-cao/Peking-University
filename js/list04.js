/**
 * Created by Administrator on 2016/8/9.
 */
//�б��������Ч��
$(function(){

    $('#list').find('li').each(function(i){
        var $arr=[$('.floor1'),$('.floor2'),$('.floor3'),$('.floor4'),$('.floor5'),$('.floor6'),$('.floor7')];
        $('#list').find('li').eq(i).mouseover(function() {
            $arr[i].show();
            $arr[i].mouseover(function (){
                $arr[i].show();
            })
        })
        $('#list').find('li').eq(i).mouseout(function(){
            $arr[i].hide();
            $arr[i].mouseout(function(){
                $arr[i].hide();
            })
        })

    })

})

//��ά������Ч��

$(function(){
    $('#wechat').mouseover(function(){
        $('.wechat').fadeIn();
    })
    $('#wechat').mouseout(function(){
        $('.wechat').fadeOut();
    })
})