localStorage.setItem('books', JSON.stringify([
    {   
        id: 1,
        name: "Do it for yourself",
        genre: "Romance books",
        price: 320 ,
        image: "https://i.postimg.cc/XVY0CzX4/img3.jpg",
        amount: 0
    },
    {   id: 2,
        name: "One day in December",
        genre: "Romance books",
        price: 230,
        image: "https://i.postimg.cc/s2RNcKRP/img4.jpg",
        amount: 0
    },
    {   id: 3,
        name: "The Spanish Love Deception",
        genre: "Romance books",
        price: 350,
        image: "https://i.postimg.cc/7hgCgx1n/img1.jpg",
        amount: 0
    },
    {   id: 4,
        name: "You've reached Sam",
        genre: "Romance books",
        price: 450,
        image: "https://i.postimg.cc/1zqMLFym/img2.jpg",
        amount: 0
    },
    {   id: 5,
        name: "Girl in pieces",
        genre: "Fiction books",
        price: 350,
        image: "https://i.postimg.cc/gj8TKnkj/18-Book-Characters-That-Accurately-Represent-Mental-Illness.png",
        amount: 0
    },
    {   id: 6,
        name: "The obsession",
        genre: "Fiction books",
        price: 230,
        image: "https://i.postimg.cc/sX9W9zCy/The-Obsession.jpg",
        amount: 0
    },
    {   id: 7,
        name: "Come with me",
        genre: "Fiction books",
        price: 320,
        image: "https://i.postimg.cc/gjbWd9xw/8-Books-We-Can-t-Wait-to-Read-in-November.jpg",
        amount: 0
    },
    {   id: 8,
        name: "One of us is lying",
        genre: "Fiction books",
        price: 450,
        image: "https://i.postimg.cc/9M8Ltyhc/These-Are-The-YA-Books-Teens-Are-Actually-Reading-And-Loving.jpg",
        amount: 0
    },
    {   id: 9,
        name: "I know you did it",
        genre: "Action books",
        price: 330,
        image: "https://i.postimg.cc/SN98QcjH/I-Know-You-Did-It-by-Sue-Wallman.jpg",
        amount: 0
    },
    {   id: 10,
        name: "The things we cannot say",
        genre: "Action books",
        price: 450,
        image: "https://i.postimg.cc/RZX76Kxd/Our-Friday-Five-Eighteen25.jpg",
        amount: 0
    },
    {   id: 11,
        name: "Five Total Strangers",
        genre: "Action Books",
        price: 370,
        image: "https://i.postimg.cc/C5gB6xVd/Is-Five-Total-Strangers-copy.png",
        amount: 0
    },
    {   id: 12,
        name: "The Fear",
        genre: "Action books",
        price: 450,
        image: "https://i.postimg.cc/KYX4qYbL/The-Fear-by-Natasha-Preston.jpg",
        amount: 0
    },
]));

let allBooks = JSON.parse(localStorage.getItem('books'));

function displaydata(){
    let books = document.querySelector("#products");
    allBooks.forEach(book => {
        books.innerHTML += `
            <div class="card">
                <img class="img" src="${book.image}" alt="${book.name}" />
                <h3>${book.name}</h3>
                <h6>R${book.price}</h6>
                <p>${book.genre}</p>
                <button type="button" id="zoesButton" class="btn btn-primary bg-dark " onclick="addToCart(${book.id})">Add to Checkout</button>
            </div>
        `
    });
}
displaydata();

//checkout

localStorage.setItem('myCheckout', JSON.stringify([]));

let check = JSON.parse(localStorage.getItem ('myCheckout'));

function addToCart(id) {
    console.log(id)
    check.push(allBooks[id-1])
    console.log(check)
    localStorage.setItem('myCheckout', JSON.stringify(check))

}



