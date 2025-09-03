$(function () {
    var webStorage = function () {
        if (sessionStorage.getItem('access')) {
            /*
            2回目以降アクセス時の処理
            */
            $(".loading").addClass('is-active');
        } else {
            /*
            初回アクセス時の処理
            */
            sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
            $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
            setTimeout(function () {
                // ローディングを数秒後に非表示にする
                $(".loading").addClass('is-active');
                $(".loading-animation").removeClass('is-active');
            }, 3000); // ローディングを表示する時間
        }
    }
    webStorage();
});

(function () {
    // $(window).on('load', () => {
    //     setTimeout(() => $('#overlay').slideUp(110), 1600)
    // });

    $('.nav-drawer__button, .nav-header, .nav-header a').on('click', function () {
        $('body').toggleClass('open');
    });

    $('#pagetop').on('click', function (e) {

        e.preventDefault();

        $('html').animate({
            'scrollTop': 0
        }, 700)
    });

    var regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (window.navigator.userAgent.search(regexp) !== -1) {
        $(".slick-b").slick({
            autoplay: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToScroll: 1,
            infinite: true,
        });
    } else {
        $(".slick-b").slick({
            autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToScroll: 1,
            infinite: true,
        });
    }

    $(".s-page").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    $('.gallery').modaal({
        type: 'image',
    });

    AOS.init();

})();

$(function () {

    $('a[href^="#"]').click(function () {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -40;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href = $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});





