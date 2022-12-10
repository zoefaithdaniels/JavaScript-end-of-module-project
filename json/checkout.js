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