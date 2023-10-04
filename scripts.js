let links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Ha fallado");
  });
}

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
let img1 = document.querySelectorAll("img");
for (let i = 0; i < img1.length; i++) {
  img1[i].src = "./assets/magic-1.gif";
}

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let colorText = document.querySelector("p");
colorText.style.backgroundColor = "#216869";
colorText.style.color = "white";
// 2.3 Bloques de article o section: Cambia el color de fondo.

let colorArticle = document.querySelector("article");
colorArticle.style.backgroundColor = "green";

let colorSection = document.querySelector("section");
colorSection.style.backgroundColor = "pink";

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
//y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

for (let i = 0; i < img1.length; i++) {
  img1[i].addEventListener("mouseenter", function () {
    img1[i].src = "./assets/abracadabra.gif";
  });
  img1[i].addEventListener("mouseleave", function () {
    img1[i].src = "./assets/magic-1.gif";
  });
}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
