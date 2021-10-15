$(document).ready(function () {

    /* CARD and MODAL START*/
    const $buy = $('.card__btn');
    const $modal = $('.modal');
    const $close = $('.modal__close');
    const $Cname = $('.card__name');
    const $Mname = $('.modal__name');
    const $mAmount = $('.modal__amount');
    const $mPay = $('.pay__amount');
    const $mQuantity = $('.quantity__show');
    const $mPilus = $('.quantity__pilus');
    const $mMinus = $('.quantity__minus');
    $mMinus.on('click', function () {
        if ($mQuantity.html() <= 1) {
            $mQuantity.html(1);
        }
        else {
            $mQuantity.html($mQuantity.html() - 1);
            let count = $(this).offsetParent().find('.amount').html();
            $mPay.html(+count * $mQuantity.html());
        }
    })
    $mPilus.on('click', function () {
        $mQuantity.html(+$mQuantity.html() + +1);
        if ($mQuantity.html() == 11) {
            alert('Are you sure ?Are you really want to order 11 burgers ?');
        }
        let count = $(this).offsetParent().find('.amount').html();
        $mPay.html(+count * $mQuantity.html());
    })
    const $attr = $('.attr')
    $buy.on('click', function () {
        $modal.show(0);
        const $name = $(this).offsetParent().find($Cname);
        $Mname.html($name.html());
        $attr.html($name.attr('data-name'));
        let $price = $(this).parent().find('.amount').html();
        $mAmount.html($price);
        $mPay.html($price);
        let $img = $(this).offsetParent().find('.card__aside').html();
        $('.modal__top').html($img);
        $('.modal__top img').addClass('top__img');
    });
    $close.on('click', function () {
        $modal.hide(0);
        $mQuantity.html(1);
    });
    const $mBtn = $('.modal__btn');
    const $number = $('.item__number');
    const $shop_number = $('.shop__number');
    const $all = $('.item__price');
    const $shop = $('.shop');
    const $pCount = $('.count');
    $pCount.html('');
    const $nameBox = $('.namebox');
    $nameBox.html('');
    const $pAmount = $('.amountbox__item');
    $pAmount.html(0);
    const $pPrice = $('.products__list-price');
    $pPrice.html('');
    const $pAll = $('.payment__all-span');
    $pAll.html('');
    const $pTotal = $('.payment__total-price');
    const $delivery = $('.delivery');
    $mBtn.on('click', function () {
        $modal.hide(0);
        $number.html(+$mQuantity.html() + +$number.html());
        $shop_number.html(+$mQuantity.html() + +$shop_number.html());
        $all.html(+$mPay.html() + +$all.html());
        $($shop).css('transform', 'translateX(2px)').css('opacity', '1');

        let $name = $(this).offsetParent().find($Mname);

        if (!$('.namebox__item').hasClass($attr.html())) {
            $nameBox.html($nameBox.html() + `<li class="namebox__item ${$attr.html()}">${$name.html()}</li>`);
            $pCount.html($pCount.html() + `<li class="count__box ${$attr.html()}__show">${$mQuantity.html()}</li>`);
            $mQuantity.html(1);
            $pPrice.html($pPrice.html() + `<li class="products__list-amount amountbox"><span class="amountbox__item ${$attr.html()}__price">${$mPay.html()}</span> <span 
            class="amount__currency">сум</span></li>`);
        }
        else {
            $(`.${$attr.html()}__show`).html(+$(`.${$attr.html()}__show`).html() + +$mQuantity.html());
            $mQuantity.html(1);
            $(`.${$attr.html()}__price`).html(+$(`.${$attr.html()}__price`).html() + +$mPay.html());
        }
        $pAll.html($all.html());
        $pTotal.html(+$delivery.html() + +$pAll.html());
    })
    const $musicBtn = $('.music__icon');
    const $music1 = $('#music1');
    const $music2 = $('#music2');
    const $musicImg = $('.music__icon-img');
    const $musicText = $('.music__text');
    console.log($mQuantity);
    $musicBtn.on('click', function () {
        $music1[0].play();
        $musicText.hide(1000);
        let music = setInterval(() => {
            if ($musicImg.css('rotate') == '0deg' || $musicImg.css('rotate') == '360deg') {
                $musicImg.css('rotate', '90deg');
                $(this).css('scale', '1.1');
            }
            else if ($musicImg.css('rotate') == '90deg') {
                $musicImg.css('rotate', '180deg');
                $(this).css('scale', '1');
            }
            else if ($musicImg.css('rotate') == '180deg') {
                $musicImg.css('rotate', '270deg');
                $(this).css('scale', '1.1');
            }
            else {
                $musicImg.css('rotate', '360deg');
                $(this).css('scale', '1');
            }
        }, 100)
        setTimeout(function () {
            $music2[0].play();
            setTimeout(function () {
                clearInterval(music);
                $musicText.show(1000)
            }, 346000)
        }, 160000);
    })
    const $clear = $('.shop__clear');
    $clear.on('click', function (e) {
        e.preventDefault();
        $number.html(0);
        $shop_number.html(0);
        $all.html(0);
        $pPrice.html('');
        $pCount.html('');
        $nameBox.html('');
        if ($(window).width() < 768) {
            $($shop).css('transform', 'translateX(-2px)').css('opacity', '.8');
        }
        else {
            $($shop).css('transform', 'translateX(192px)').css('opacity', '.8');
        }
    })
    /* CARD and MODAL END*/

    /* PAYMENT START */
    const $payment = $('.payment');
    const $pay = $('.shop__pay');
    $pay.on('click', function () {
        if ($shop_number.html() != 0) {
            $payment.show(0);
        }
    })
    const $paymentBtn = $('.pay__btn');
    const $paymentBtnImg = $('.pay__btn__img');
    const $paymentBack = $('.back__btn');
    $paymentBtn.on('click', function () {
        $($paymentBtnImg).css('display', 'block');
        let loading = setInterval(function () {
            setTimeout(function () {
                clearInterval(loading);
                $($paymentBtn).html('оплачено').addClass('pay__btn__done').css('cursor', 'default').css('margin-bottom', '50px');
                $('.thanks').show(500);
                $('#menu').show(0);
                $paymentBack.hide(0);

            }, 3000)
            if ($($paymentBtnImg).css('rotate') == '0deg' || $('.pay__btn__img').css('rotate') == '360deg') {
                $($paymentBtnImg).css('rotate', '90deg');
            }
            else if ($($paymentBtnImg).css('rotate') == '90deg') {
                $($paymentBtnImg).css('rotate', '180deg');
            }
            else if ($($paymentBtnImg).css('rotate') == '180deg') {
                $($paymentBtnImg).css('rotate', '270deg');
            }
            else {
                $($paymentBtnImg).css('rotate', '360deg');
            }
        }, 100)
    })
    $paymentBack.on('click', function () {
        $payment.hide(0);
    })
    /* PAYMENT END */

    /* FIXED MENU START */
    let $links = $('.fixed__menu__links');
    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active');
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 150;
        $('html, body').animate({
            scrollTop: $target,
        }, 1000);
    })
    $(window).scroll(function () {
        $scroll = $(this).scrollTop();
        if ($scroll >= $('#stdr').offset().top - 300) {
            $('.fixed__menu').css('display', 'flex');
            $($shop).css('display', 'flex');
        }
        else {
            $('.fixed__menu').css('display', 'none');
            $($shop).css('display', 'none');
        }

        if ($scroll >= $('#drink2').offset().top + 150) {
            $('.fixed__menu').css('display', 'none');
            $($shop).css('display', 'none');
        }
        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 300;
            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
    /* FIXED MENU END */


    /* FOOTER SLIDER START */
    let n = 0;
    let i = 100;
    function slider() {
        $('#firstImg').css('left', `${i}%`);
        $('#secondImg').css('left', `-${105 - n}%`);
        if (n == 105) {
            n = 0;
            i = 100;
        }
        n++;
        i++;
    }
    setInterval(slider, 1000);
    /* FOOTER SLIDER END */

});