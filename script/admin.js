let tbody = document.getElementById('table');
let books = JSON.parse(localStorage.getItem('books'));
console.log(books)

    books.forEach((item)=> {
        try {
            tbody.innerHTML += `<tr>
        <th scope="row"> <img src="${item.image}" style="width:40px;" </th>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.genre}</td>
        <td>${item.price}</td>
        <td> <button>Edit</button>
        <button>del</button>
        </td>
        </tr>`;
        } catch (error) {
            console.log(error);
        }
        
        });