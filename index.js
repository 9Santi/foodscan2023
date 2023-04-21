// Gere les quantités
document.querySelector("#energie>td.quantité").textContent = "1";
document.querySelector("#fat>td.quantité").textContent = "2";
document.querySelector("#gras>td.quantité").textContent = "3";
document.querySelector("#glucides>td.quantité").textContent = "4";
document.querySelector("#sugar>td.quantité").textContent = "5";
document.querySelector("#prot>td.quantité").textContent = "6";
document.querySelector("#sel>td.quantité").textContent = "7";

// Gere les unités
document.querySelector("#energie>td.unité").textContent = "kj/kcal";
document.querySelector("#fat>td.unité").textContent = "g";
document.querySelector("#gras>td.unité").textContent = "g";
document.querySelector("#glucides>td.unité").textContent = "g";
document.querySelector("#sugar>td.unité").textContent = "g";
document.querySelector("#prot>td.unité").textContent = "g";
document.querySelector("#sel>td.unité").textContent = "g";

// Gere le nutriscore
document.querySelector("#nutriscore");

// Gere la photo du produit
document.querySelector("#img_prod");

// Gere les ingrédients
document.querySelector("#ingr").textContent = "Description des ingrédients";

// Gere le nom du produit
document.querySelector("#nomproduit").textContent = "Nom du produit";

// Recupere la valeur de recherche
document.querySelector("form[role=search]").addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  const searchValue = (document.getElementById(
    "searchInput"
  ).value = 737628064502);
  const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${searchValue}.json?fields=generic_name,nutriments,ingredients_text,image_front_url,nutriscore_grade`;
  console.log(apiUrl);
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.product);
      showData(data.product);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
// `https://api.example.com/search?q=${searchValue}

// Ajoute la valeur sur html
function showData(p) {
  const n = p.nutriments;

  document.querySelector("#nomproduit").textContent = p.generic_name;

  document.querySelector("#energie>td.quantité").textContent =
    n["energy-kcal_100g"];
  document.querySelector("#fat>td.quantité").textContent = n.fat_100g;
  document.querySelector("#gras>td.quantité").textContent =
    n["saturated-fat_100g"];
  document.querySelector("#glucides>td.quantité").textContent =
    n.carbohydrates_100g;
  document.querySelector("#sugar>td.quantité").textContent = n.sugars_100g;
  document.querySelector("#prot>td.quantité").textContent = n.proteins_100g;
  document.querySelector("#sel>td.quantité").textContent = n.salt_100g;

  document.querySelector("#ingr").textContent = p.ingredients_text;

  let nutriscore = p.nutriscore_grade 
  
  function showNutri () {
    if (nutriscore == "A") {
        document.querySelector("#nutriscore").setAttribute('src', "nutriscoreA.svg")
    } else if nutriscore == "B" {
        document.querySelector("#nutriscore").setAttribute('src', "nutriscoreB.svg")
    } else if nutriscore == "C" {
        document.querySelector("#nutriscore").setAttribute('src', "nutriscoreC.svg")
    } else if nutriscore == "D" {
        document.querySelector("#nutriscore").setAttribute('src', "nutriscoreD.svg")
    } else {
        document.querySelector("#nutriscore").setAttribute('src', "nutriscoreE.svg")
    }
  };
  
  document.querySelector("#nutriscore") = p.nutriscore_grade;

  document.querySelector("#img_prod").setAttribute('src', p.image_front_url);

  
}

// Recupere la valeur de l'email
function submitForm(event) {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;
  console.log(emailValue);
  console.log(messageValue);
}
