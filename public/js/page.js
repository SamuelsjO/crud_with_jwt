

const axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}

function login(){
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const email = emailField.value;
    const password = passwordField.value;

    axios.post("http://localhost:3000/auth",{ 
        email,
        password
    }).then( response => { 
        var token = response.data.token;
        localStorage.setItem("token",token);
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }).catch(err => {
        alert("Login incorreto")
    })
}

function createGames(){
    const titleInput = document.getElementById("title")
    const yearInput = document.getElementById("year")
    const priceInput = document.getElementById("price")

    const game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    axios.post("http://localhost:3000/games", game, axiosConfig).then(response => {
        if(response.status == 200){
            alert("Game cadastrado")
        }
    }).catch(err => {
        console.log(err)
    })
}

function deleteGame(listItem){
    const id = listItem.getAttribute("data-id");

    axios.delete("http://localhost:3000/" + id, axiosConfig).then( response => {
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

    axios.put("http://localhost:3000/"+id,game, axiosConfig).then(response => {
        if(response.status == 200){
            alert("Game Editado")
        }
    }).catch(err => {
        console.log(err)
    })
}

    axios.get("http://localhost:3000/findGames", axiosConfig).then(response => {
        let games = response.data;
        console.log("Lista de games: ", games)
        const list = document.getElementById("games");

        games.forEach(game => {
            var item = document.createElement("li");

            item.setAttribute("data-id",game.id);
            item.setAttribute("data-title", game.title)
            item.setAttribute("data-year", game.year)
            item.setAttribute("data-price", game.price)

            item.innerHTML = game.id + " - " + game.title + " - $" + game.price;

            var deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Deletar";
            deleteBtn.addEventListener("click", function(){
                deleteGame(item);
            })

            var editBtn = document.createElement("button");
            editBtn.innerHTML = "Editar"
            editBtn.addEventListener("click", function(){
                editGames(item);
            })

            list.appendChild(deleteBtn);
            list.appendChild(editBtn)
            list.appendChild(item);
        });

    }).catch(error => {
        console.log(error)
    })


    