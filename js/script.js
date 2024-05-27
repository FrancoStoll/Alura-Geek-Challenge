import { conectApi } from "./conectApi.js";
import { createProduct } from "./createProduct.js";
import { deleteProduct } from "./deleteProduct.js";

const cardContainer = document.querySelector(".cards");
const formulario = document.querySelector(".form");

const data = await conectApi.getProducts();

function loadProducts(products) {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("card");
    productElement.innerHTML = `
            <img src="./assets/card.svg" />
            <div class="card-container--info">
              <p class="product-name">${product.name}</p>
              <div class="card-container--value">
                <p>$${product.price}</p>
                <button data-id=${product.id} class="btnDelete">
                <img src="./assets/trashIcon.svg" />
                </button>
              </div>
            </div>
        `;
    cardContainer.appendChild(productElement); // Añade el producto al contenedor
  });
}
loadProducts(data);

formulario.addEventListener("submit", createProduct);

const btns = document.querySelectorAll(".btnDelete");

btns.forEach((btn) => {
  btn.addEventListener("click", () => deleteProduct(btn));
});
