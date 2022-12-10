let x = JSON.parse(localStorage.getItem('myCheckout'));
let y = document.querySelector('#checkoutTally');

x.forEach(element => {
    console.log(element);
    y.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.genre}</td>
            <td>${element.price}</td>
            <td></td>
        </tr>
    `

});

//filter
//  const genre = [romance];
//  const result =
//  genre.filter(romance);

//  function romance(genre) {
//      return genre >= romance;
//  };

// const genre = [romance,fiction,action];


// function checkBooks(genre){
//     return genre > 
//     document.getElementById("genreToCheck").value;
// }

// function myFunction() {
//     document.getElementById("books")
//     .innerHTML =
//     genre.filter(checkBooks);
// }







// let check = [];
// localStorage.setItem('myCheckout', JSON.stringify(check))
// let checkout = JSON.parse(localStorage.getItem('myCheckout'));
// console.log(checkout)
// let tbody = document.querySelector('tbody')
// console.log(checkout);



//checkout
// let myCheckout = [];
// localStorage.setItem('myCheckout', JSON.stringify(check))
// let k = document.querySelector('#zoesButton')
// k.addEventListener("click", myFunction);

// function myFunction() {
//   let b = JSON.parse(localStorage.getItem('myCheckout'));
//   b.push(allBooks(item));
//   console.log(check)
//   localStorage.setItem('myCheckout',JSON.stringify(myCheckout));
    
// }
