let check = [];
localStorage.setItem('myCheckout', JSON.stringify(check))
let checkout = JSON.parse(localStorage.getItem('myCheckout'));
// console.log(checkout)
let tbody = document.querySelector('tbody')
console.log(checkout);
// Object.keys(checkout).forEach((item) => {
    // console.log(checkout[item]);
    // tbody.innerHTML +=
    // `
    // <tr>
    // <th>${parseInt([item]) + 1}</th>
    // <td><img src='${checkout[item].image}' style=></td>
    // <td>${checkout[item].name}</td>
    // <td>${checkout[item].genre}</td>
    // <td>${checkout[item].price}</td>
    // <td>${checkout[item].amount}</td>
    // </tr>
    // `
// })

//parse into localStorage
// let allBooks = JSON.parse(localStorage.getItem('books'));
// Object.keys(allBooks).forEach((item) => {
//show names of cars in console
//     let w = allBooks[item];
//     let myBook = document.querySelector("#products");
//     console.log(allBooks[item].type);
//     myBook.innerHTML +=
//                 `
//                     <div class="col-md-4">
//                         <div class="card" style="width: 18rem;">
//                             <img src=${w.image} class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <p class="carName">${w.name}</p>
//                                     <p class="carPrice">${w.price}</p>
//                                     <button class="addToCart" href="#">Purchase</button>
//                                 </div>
//                         </div>
//                     </div>
//                 `
// });

// let addBtn = document.querySelectorAll('.addToCart');
// Object.keys(addBtn).forEach((item) => {
//         addBtn[item].addEventListener('click', (e) => {
//             console.log('clicked', addBtn[item])
//             console.log(allBooks[item])
//             checkout.push(allBooks[item]);
//             console.log(checkout)
//             localStorage.setItem('myCheckout', JSON.stringify(check));
//         })
//     }
// )