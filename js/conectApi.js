async function getProducts() {
  const fetchProducts = await fetch("http://localhost:3000/productos");
  const data = await fetchProducts.json();

  return data;
}

async function deleteProductById(id) {
  const req = await fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resp = await req.response();

}

export const conectApi = {
  getProducts,
  deleteProductById,
};
