// drawer
$(function () {
    $(document).ready(function () {
        $('.drawer').drawer();
    });
});

$(function () {
    $('.qa__header').click(function () {
        $(this).next().slideToggle();
        $(this).children('.qa__header--inline').toggleClass('is-open');
    });
});

$(function () {
    $('a[href^="#"]').click(function () {
        let header = $(".header").innerHeight();
        let speed = 500;
        let id = $(this).attr("href");
        let target = $("#" == id ? "html" : id);
        let position = $(target).offset().top - header;
        $("html, body").animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });
});

$(function () {
    $(window).on("scroll", function () {
        if (100 < $(this).scrollTop()) {
            $('.to__top').addClass('is-show');
        } else {
            $('.to__top').removeClass('is-show');
        }
    });
});

// swiper
$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


// google form
$(function () {
    let $form = $('#js-form')

    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $form.slideUp();
                    $('#js-success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $form.slideUp();
                    $('#js-error').slideDown();
                }
            }
        });
        return false;
    });
});

// フォームの入力確認
$(function () {
    let $submit = $('#js-submit');

    $('#js-form input, #js-form textarea').on('change', function () {
        if (
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.120957132"]').prop('checked') == true
        ) {
            // 全て入力されているとき
            $submit.prop('disabled', false)
            $submit.addClass('-active')
        } else {
            // 全て入力されていないとき
            $submit.prop('disabled', true)
            $submit.removeClass('-active')
        }
    });
});

// wow
$(function () {
    new WOW().init();
});

$(function () {
    $('.header__item--link').click(function () {
        $('.header__item--link').removeClass('is-active');
        $(this).addClass('is-active');
        return false;
    });
});
