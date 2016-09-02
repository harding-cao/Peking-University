/**
 * Created by cao on 2016/8/29.
 */

//列表鼠标悬浮效果
$(function(){

    $('#list').find('li').each(function(i){
        var $arr=[$('.floor1'),$('.floor2'),$('.floor3'),$('.floor4'),$('.floor5'),$('.floor6'),$('.floor7')];
        $('#list').find('li').eq(i).mouseover(function() {
            $arr[i].fadeIn();
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

//二维码悬浮效果

$(function(){
    $('#wechat').mouseover(function(){
        $('.wechat').fadeIn();
    })
    $('#wechat').mouseout(function(){
        $('.wechat').fadeOut();
    })
})

//网站图片说明运动

$(function(){

    var $img1=[$('.web1'),$('.web2'),$('.web3'),$('.web4'),$('.web5')];
    var $img2=[$('.mouseplay1'),$('.mouseplay2'),$('.mouseplay3'),$('.mouseplay4'),$('.mouseplay5')];
    $.each($img1,function(i){
        $img1[i].mouseover(function(){
            $img2[i].animate({height:'30px'},200);
        })
    })
    $.each($img1,function(i){
        $img1[i].mouseout(function(){
            $img2[i].animate({height:'0px'},200);
        })
    })
})


$(function(){

    var $img3=[$('.bg1'),$('.bg2'),$('.bg3')];
    var $img4=[$('.mouseon1'),$('.mouseon2'),$('.mouseon3')];
    $.each($img3,function(i){
        $img3[i].mouseover(function(){
            $img4[i].animate({height:'30px'},200);
        })
    })
    $.each($img3,function(i){
        $img3[i].mouseout(function(){
            $img4[i].animate({height:'0px'},200);
        })
    })
})

//返回键

$(function(){
    $('#sidebar').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>=800)
        {
            $('#sidebar').fadeIn(400);
        }
        else
        {
            $('#sidebar').fadeOut(200);
        }

    })

    $('#sidebar').click(function(){
            $('html,body').animate({scrollTop:0},500);
        }
    )

})

