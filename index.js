// Gere les quantités
document.querySelector("#energie>td.quantité").textContent="1" ;
document.querySelector("#fat>td.quantité").textContent="2" ;
document.querySelector("#gras>td.quantité").textContent="3" ;
document.querySelector("#glucides>td.quantité").textContent="4" ;
document.querySelector("#sugar>td.quantité").textContent="5" ;
document.querySelector("#prot>td.quantité").textContent="6" ;
document.querySelector("#sel>td.quantité").textContent="7" ;

// Gere les unités
document.querySelector("#energie>td.unité").textContent="kj/kcal" ;
document.querySelector("#fat>td.unité").textContent="g" ;
document.querySelector("#gras>td.unité").textContent="g" ;
document.querySelector("#glucides>td.unité").textContent="g" ;
document.querySelector("#sugar>td.unité").textContent="g" ;
document.querySelector("#prot>td.unité").textContent="g" ;
document.querySelector("#sel>td.unité").textContent="g" ;

// Gere le nutriscore
document.querySelector("#nutriscore")


// Gere les ingrédients
document.querySelector("#ingr").textContent="Description des ingrédients"

// Gere le nom du produit
document.querySelector("#nomproduit").textContent="Nom du produit"

// Recupere la valeur de recherche 
function search(event) {
    event.preventDefault();
    const searchValue = document.getElementById("searchInput").value;
    const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${searchValue}.json?fields=generic_name,nutriments,ingredients_text,image_front_url`;
    console.log(apiUrl) 
}
// `https://api.example.com/search?q=${searchValue}

// Recupere la valeur de l'email
function submitForm(event) {
    event.preventDefault();
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("message").value;
    console.log(emailValue);
    console.log(messageValue)
  }

document.querySelector("form[role=search]").addEventListener("submit",search);

// Change les valeurs

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error ('Network response was not ok')
    }
    return response.json();
})
.then(data => {
    const items =data;
    console.log(items);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});