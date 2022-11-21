$(function(){
    $(window).scroll(function(){
        const move = $('.call-action').prop('scrollHeight');
        if($(window).scrollTop() > 500) {
            $('.download').addClass('active');
        }else {
            $('.download').removeClass('active')
        } 
        if(move === 1567) {
            $('.device-list').addClass('active')

        }

    })
})

$('ul.gnb > li').on('mousemove',function(){
$(this).find('ul.nav').addClass('on')
    
})
$('ul.gnb > li').on('mouseleave',function(){
    $(this).find('ul.nav').removeClass('on')
        
    })