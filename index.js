// Recupere la valeur de recherche
document.querySelector("form[role=search]").addEventListener("submit", search);

// Lance la recherche API
function search(event) {
  event.preventDefault();
  const searchValue = document.getElementById("searchInput").value;
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

// Ajoute la valeur sur html du tableau nutritionnelle
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

  // Gere la liste ingrédients
  let ingredientsText = p.ingredients_text;
  if (ingredientsText) {
    document.querySelector("#ingr").textContent = ingredientsText;
  } else {
    document.querySelector("#ingr").textContent = "Ingrédients non définis";
  }

  // Const de valeur de background nutriscore du produit
  const nutriscores = {
    a: "rgba(2, 129, 62, 1)",
    b: "rgba(134, 188, 38, 1)",
    c: "rgba(255, 202, 0, 1)",
    d: "rgba(239, 125, 0, 1)",
    e: "rgba(229, 50, 18, 1)",
  };

  // Gere le nutriscore et son background produit
  let nutriscore = p.nutriscore_grade;
  let nutriscoreColor = nutriscores[nutriscore];

  switch (nutriscore) {
    case "a":
    case "b":
    case "c":
    case "d":
    case "e":
      document
        .querySelector("#nutriscore")
        .setAttribute("src", `img/nutriscore${nutriscore}.svg`);
      document.querySelector(".produit").style.backgroundColor =
        nutriscoreColor;
      break;
    default:
      document
        .querySelector("#nutriscore")
        .setAttribute("src", "img/nutriscore-unknown.svg");
      document.querySelector(".produit").style.backgroundColor = "grey";
  }

  // Gere la photo du produit
  let imageproduit = p.image_front_url;
  document.querySelector("#img_prod").setAttribute("src", (url = imageproduit));
}

// Recupere la valeur de l'email
// function submitForm(event) {
//   event.preventDefault();
//   const emailValue = document.getElementById("email").value;
//   const messageValue = document.getElementById("message").value;
//   console.log(emailValue);
//   console.log(messageValue);
// }
