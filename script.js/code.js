fetch("../json/json.js")
// .then ((store) => {
//     return store.json()
// })
// .then((data) => {
//     let catelogue = document.querySelector('#catelogue');
//     Object.keys(data).forEach((item) => {
//         console.log(data[item].name);
//         if(data[item] && data[item].type == "book") {
//             catelogue.innerHTML +=
//             `
//             <div class="col-md-4">
//                     <div class="card" style="width: 18rem;">
//                         <img src=${data[item].image} class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <p class="bookName">${data[item].name}</p>
//                                 <p class="bookPrice">${data[item].price}</p>
//                                 <button class="addToCart" href="#">Purchase</button>
//                             </div>
//                     </div>
//             </div>
//             `
//         }
//     })
// });

localStorage.setItem('books', JSON.stringify([
    {   
        "id": 1,
        "name": "Do it for yourself",
        "genre": "Romance books",
        "price": 320 ,
        "type": "book",
        "image": "https://i.postimg.cc/XVY0CzX4/img3.jpg",
        "amount": 0
    },
    {   "id": 2,
        "name": "One day in December",
        "genre": "Romance books",
        "price": 230,
        "type": "book",
        "image": "https://i.postimg.cc/s2RNcKRP/img4.jpg",
        "amount": 0
    },
    {   "id": 3,
        "name": "The Spanish Love Deception",
        "genre": "Romance books",
        "price": 350,
        "type": "book",
        "image": "https://i.postimg.cc/7hgCgx1n/img1.jpg",
        "amount": 0
    },
    {   "id": 4,
        "name": "You've reached Sam",
        "genre": "Romance books",
        "price": 250,
        "type": "book",
        "image": "https://i.postimg.cc/1zqMLFym/img2.jpg",
        "amount": 0
    }
]));

let x = JSON.parse(localStorage.getItem('books'));

console.log(x)

function displaydata(){
    let books = document.querySelector("#products");
   x.forEach((item)=> {
    books.innerHTML+=`<div class="row row-cols-5">
    <div class="card 1">
      <img class="img" src="./img/img3.jfif">
      <h3>Romance books</h3>
      <p>Do it for yourself</p>
      <h6>R320,00</h6>
      <button class="buy">Buy now</button>
    </div>
    `;
   }) ;
}
displaydata();