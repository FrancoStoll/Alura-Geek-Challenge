import { conectApi } from "./conectApi.js";

export const deleteProduct = (btn) => {
  const id = btn.getAttribute("data-id");

  conectApi.deleteProductById(id);
};

// btnDelete.addEventListener("click", deleteProduct);

// function deleteProduct(e) {
//   console.log(e.target.dataset);
// }
