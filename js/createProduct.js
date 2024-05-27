const btnLimpiar = document.querySelector(".limpiar");
const name = document.querySelector("[data-name]");
const price = document.querySelector("[data-price]");
const image = document.querySelector("[data-image]");

export async function createProduct(event) {
  event.preventDefault();

  if ([name.value, price.value, image.value].includes("")) return;

  const conexion = await fetch("http://localhost:3000/productos", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      price: price.value,
      image: image.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const conexionExitosa = conexion.json();

  console.log(conexionExitosa);
}

btnLimpiar.addEventListener("click", () => {
  name.value = "";
  price.value = "";
  image.value = "";
});
