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

//

// $(function(){
//     if(move === 0) {
//         $('.device-list').addClass('active')
//     }
//     console.log(move)
// })