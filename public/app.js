// window.addEventListener('load', function (e) {
//     var card = document.querySelectorAll('.card-product');
//     var res = document.querySelector('.big');
//     var sum = 0

//     for (var i = 0; i <= card.length - 1; i++) {
//         card[i].addEventListener('click', function () {
//             this.classList.toggle('cart-active')
//             var price = this.getAttribute('data-price')
//             if (this.classList.contains('cart-active')) {
//                 sum = sum + +price
//             } else {
//                 sum = sum - +price
//             }
//             res.innerHTML = sum
//         })
//     }

// });