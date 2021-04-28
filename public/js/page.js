
function createGames(){
    const titleInput = document.getElementById("title")
    const yearInput = document.getElementById("year")
    const priceInput = document.getElementById("price")

    const game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    axios.post("http://localhost:3000/games", game).then(response => {
        if(response.status == 200){
            alert("Game cadastrado")
        }
    }).catch(err => {
        console.log(err)
    })
}

function deleteGame(listItem){
    const id = listItem.getAttribute("data-id");

    axios.delete("http://localhost:3000/" + id).then( response => {
        alert(`o filme de id ${id} foi deletado`)
    }).catch(err => {
        console.log(err)
    })
}

function editGames(listItem){
    const id = listItem.getAttribute("data-id");
    const title = listItem.getAttribute("data-title");
    const year = listItem.getAttribute("data-year");
    const price = listItem.getAttribute("data-price");

    document.getElementById("idEdit").value = id;
    document.getElementById("titleEdit").value = title;
    document.getElementById("yearEdit").value = year;
    document.getElementById("priceEdit").value = price;


}

function updateGame(){
    const idInput = document.getElementById("idEdit")
    const titleInput = document.getElementById("titleEdit")
    const yearInput = document.getElementById("yearEdit")
    const priceInput = document.getElementById("priceEdit")

    const game = { 
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    const id = idInput.value

    axios.put("http://localhost:3000/"+id,game).then(response => {
        if(response.status == 200){
            alert("Game Editado")
        }
    }).catch(err => {
        console.log(err)
    })
}

    axios.get("http://localhost:3000/findGames").then(response => {
        const games = response.data
        const list = document.getElementById("games");

        games.forEach(game => {
            const item = document.createElement("li");

            item.setAttribute("data-id", game.id)
            item.setAttribute("data-title", game.title)
            item.setAttribute("data-year", game.year)
            item.setAttribute("data-price", game.price)

            item.innerHTML = game.id +  " - " + game.title + " - $" + game.price;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Deletar";
            deleteBtn.addEventListener("click", function(){
                deleteGame(item);
            })

            const editBtn = document.createElement("button");
            editBtn.innerHTML = "Editar"
            editBtn.addEventListener("click", function(){
                editGames(item);
            })


            list.appendChild(editBtn)
            list.appendChild(deleteBtn);
            list.appendChild(item);
        });

    }).catch(error => {
        console.log(error)
    })