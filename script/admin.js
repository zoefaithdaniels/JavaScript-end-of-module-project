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
        <td> <button id="ed" onclick="edItem(${item.id}">Edit</button>
        <button id="del" onclick="delItem(${item.id})">del</button>
        </td>
        </tr>`;
        } catch (error) {
            console.log(error);
        }
        
        });

        //del
        function delItem(id){
            books.splice(id-1, 1)
            localStorage.setItem('books', JSON.stringify(books))
            location.reload();        }

         //edit

         function edItem(id){
            books.splice(id-1,1),
            localStorage.setItem('books',JSON.stringify(books))
            location.reload();
         }