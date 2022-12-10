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
        <td> <button id="ed">Edit</button>
        <button id="del" onclick="delItem(${item.id})">del</button>
        </td>
        </tr>`;
        } catch (error) {
            console.log(error);
        }
        
        });

        //del
        function delItem(id){
            books.splice(id-1,1);
            let i =1
            books.forEach (book => {
        console.log(book)
        localStorage.removeItem('book');
            })
            displaydata()
        }