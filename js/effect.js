/*a tag で#toのhrefを持つものをクリックするとスクロールアニメーションするよ*/
$(function(){
  $('a[href^="#to"]').on('click',function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#to" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/*トップへ戻るボタンがスクロールすると出てくるよ*/
$(function() {
  var topBtnfade = $(".totopbtn_fade");
    topBtnfade.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtnfade.fadeIn("1500",function(){
            $(this).addClass('translate');
        });
        } else {
            topBtnfade.fadeOut("1500");
        }
    });
});