// fetch("../json/json.js")
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
    },
    {   "id": 4,
        "name": "You've reached Sam",
        "genre": "Romance books",
        "price": 250,
        "type": "book",
        "image": "https://i.postimg.cc/1zqMLFym/img2.jpg",
        "amount": 0
    },
    {   "id": 4,
        "name": "You've reached Sam",
        "genre": "Romance books",
        "price": 250,
        "type": "book",
        "image": "https://i.postimg.cc/1zqMLFym/img2.jpg",
        "amount": 0
    },
    {   "id": 4,
        "name": "You've reached Sam",
        "genre": "Romance books",
        "price": 250,
        "type": "book",
        "image": "https://i.postimg.cc/1zqMLFym/img2.jpg",
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

let allBooks = JSON.parse(localStorage.getItem('books'));

function displaydata(){
    let books = document.querySelector("#products");
    Object.keys(allBooks).forEach( (book) => {
        let books = document.querySelector("#products");
        console.log(allBooks[book]);
        books.innerHTML+=`<div class="row row-cols-5">
        <div class="card 1">
          <img class="img" src="${allBooks[book].image}">
          <h3>${allBooks[book].name}</h3>
          <p>${allBooks[book].genre}</p>
          <h6>R320,00</h6>
          <button class="buy">Buy now</button>
        </div>
        `;
    });
}
displaydata();

let table= JSON.parse(localStorage.table)

table.forEach(item=> {
    try{
        tbody.innerHTML +=`
        <tr>
        <th> scope="row"</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.genre}</td>
        <td> <button class="btn btn-secondary btn-lg"
        <button id="del btn" class="btn btn-secondary btn-lg"
        </tr>`
    } catch (error) {
        console.log(error)
    }
} );