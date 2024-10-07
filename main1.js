/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const orders = document.querySelector(".orders");
  orders.innerHTML = "";
  for (let key in localStorage) {
    const productData = localStorage.getItem(`${key}`);
    console.log("productData", productData);
    if (productData) {
      const newProduct = JSON.parse(productData);
      console.log("newProducr:", newProduct);
      const order = document.createElement("div");
      order.setAttribute("data-id", `${key}`);
      order.className = "order-card";
      order.innerHTML = `
          <img
            src="${newProduct.imgLink}"
            alt="${newProduct.name}"
            class="product-image"
          />
          <h3 class="product-title">${newProduct.name}</h3>
          <p class="product-price">${newProduct.count}</p>
          <button class="delete-order">Удалить товар</button>
      `;
      orders.appendChild(order);
    }
  }
  const deleteBtns = document.querySelectorAll(".delete-order");
  const modalWindow = document.querySelector(".pop-up-bg");
  const closeBtn = document.querySelector(".close-modal");
  const openBtn = document.querySelector(".make-order");
  const formElement = document.getElementById("form1");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (btn) => {
      const gettingTarget = btn.target.closest(".order-card");
      const gettingId = gettingTarget.getAttribute("data-id");
      localStorage.removeItem(gettingId);
      location.reload();
    });
  });
  openBtn.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    modalWindow.classList.remove("active");
  });

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const patronymic = formData.get("patronymic");
    const email = formData.get("email");
    const adress = formData.get("adress");
    console.log(
      "Фамилия: " + surname,
      "Имя: " + name,
      "Отчество: " + patronymic,
      "Электронный адрес: " + email,
      "Физический адресс: " + adress,
      localStorage
    );
    localStorage.clear();
  });
});
