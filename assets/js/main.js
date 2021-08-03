jQuery(function($) {
    // Menu
    //-------------------------------------------------
    $(document).ready(function(){

        var header_sticky = $('.header--sticky')
        if(header_sticky.offset().top > 1){
            header_sticky.addClass("active")
        }
        $(window).scroll(function(){
            $(this).scrollTop()>1?header_sticky.addClass("active"):header_sticky.removeClass("active")
        })

        $('.menu-mb__btn').click(function(e){
            e.preventDefault()
            if($('.menu-mb__btn').hasClass('active')){

                $('body').removeClass('modal-open')
                $(this).removeClass('active')
                $('.nav__mobile').removeClass('active')

            } else {
                $('body').addClass('modal-open')
                $(this).addClass('active')
                $('.nav__mobile').addClass('active')
            }
        });

        var e=$(".nav__mobile .nav__mobile--ul");
        e.find(".menu-item-has-children>a").after('<button class="nav__mobile__btn"><i></i></button>'),

        e.find(".nav__mobile__btn").on("click",function(e){
            e.stopPropagation(),
            $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
            $(this).parent().addClass("sub-active"),
            $(this).parent().find('.sub-menu').first().slideToggle()
        })
    });
    //-------------------------------------------------
});