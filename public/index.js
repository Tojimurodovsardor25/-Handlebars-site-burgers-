// const price = document.querySelectorAll(".price");

// const currency = function (price) {
//     return new Intl.NumberFormat('en-EN', {
//         currency: 'usd',
//         style: 'currency'
//     }).format(price)
// }

// price.forEach((val, index) => {
//     val.textContent = currency(val.textContent)
// })

// const $card = document.querySelector('#card')

// if ($card) {
//     $card.addEventListener('click', (e) => {
//         const contain = e.target.classList.contains('js-remove')
//         if (contain) {
//             const id = e.target.dataset.id

//             fetch('/card/remove/' + id, {
//                 method: 'delete'
//             }).then(res => res.json())
//                 .then(card => {
//                     if (card.burgers.length) {
//                         const inner = card.burgers.map(burger => {
//                             return `
                            
//                             `
//                         })
//                     }
//                 }).join('')
//             $card.querySelector('tbody').innerHTML = inner
//             $card.querySelector('.price').innerHTML = currency
//         } else {
//             $card.innerHTML = '<p>Card is empty</p>'
//         }
//     })
// }