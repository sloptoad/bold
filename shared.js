var positionSmall = 0;
    $(document).scroll(function () {
        positionSmall = $(this).scrollTop();
        console.log({positionSmall})
        if (positionSmall > 300) {
            $(".linkitem").css('color', 'transparent');
            $(".linkitem:hover span").css('border-bottom', 'none');
            $(".linkitem.schedule").css('border', 'none');
        }
         else {
            $(".linkitem").css('color', 'white');
            $(".linkitem:hover span").css('border-bottom', '1px solid #fff');
            $(".linkitem.schedule").css('border', '1px solid white');
        }

        if (positionSmall >800) {
            $("#logo").css('opacity', '0');
            $('.menu__btn').css('background-color',"#8ca48c").css('opacity','0.6');
        }
         else {
            $("#logo").css('opacity', '1');
            $('.menu__btn > span,.menu__btn >span::before,.menu__btn > span::after').css('background-color',"#fff");
            $('.menu__btn').css('background-color',"transparent").css('opacity','1');
        }
        
        $("#r-img").on('click', function(){
            $('.menu__image').addClass('r-img');
            $('.menu__image').removeClass('i-img');

        })
        $("#a-img").on('click', function(){
            $('.menu__image').addClass('a-img');
            $('.menu__image').removeClass('r-img');
        })

    });

