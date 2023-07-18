$(document).ready(function(){
    $('.mob_main_menu').hide()
    $('.mob_sub_menu').hide()

    $('.toggle').click(function(){
        $('.mob_main_menu').slideToggle()
        $('.toggle i').toggleClass('fa-bars fa-xmark')
    })
    $('.mob_main_menu li a').click(function(){
        $(this).next('.mob_sub_menu').slideToggle()
    })
})