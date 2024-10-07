/** @format */

const dataBase = [
  {
    id: "0",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_9eb67f04-772f-11ee-8db3-005056012b6d/iphone-15-128gb-black-telefon-gsm-apple-mtld3ch-a-1_600.jpg",
    name: "Смартфон Apple iPhone 15 128GB Black (MTLD3CH/A)",
    count: "2 999.00",
  },
  {
    id: "1",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_bdf49d9e-f9b7-11eb-bb92-0050560120e8/dx118c-vertikalnyy-pylesos-deerma-1_600.jpg",
    name: "Вертикальный пылесос Deerma DX118C",
    count: "89.00",
  },
  {
    id: "2",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_35565949-5576-11ef-8db4-005056012b6d/-1_600.jpg",
    name: "Микроволновая печь Samsung MS23DG4504AGBW",
    count: "649.00",
  },
  {
    id: "3",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_35c28b3e-7b0e-11ef-8db4-005056012b6d/iphone-16-pro-128gb-white-titanium-telefon-gsm-apple-myne3hn-a-1_600.jpg",
    name: "Смартфон Apple iPhone 16 Pro 128GB White Titanium (MYNE3HN/A)",
    count: "5 499.00",
  },
  {
    id: "4",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_2404731f-a20b-11e8-8191-005056841710/pea-1535al-sokovyzhimalka-polaris-1_600.jpg",
    name: "Соковыжималка POLARIS PEA 1535AL",
    count: "319.00",
  },
  {
    id: "5",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_1f510a0a-8d22-11ee-8db3-005056012b6d/qe98q80cauxru-televizor-samsung-1_600.jpg",
    name: "Телевизор Samsung QE98Q80CAUXRU",
    count: "22 599.00",
  },
  {
    id: "6",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_594e7389-1753-11ea-80c7-005056840c70/good_img_8f155980-1764-11ea-80c7-005056840c70_600.jpg",
    name: "Тепловентилятор Oasis SB-20R (X)",
    count: "40.00",
  },
  {
    id: "7",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_f2a7828d-4513-11ef-8db4-005056012b6d/-1_600.jpg",
    name: "Игровой ноутбук ASUS TUF Gaming A15 FA506NCR-HN044",
    count: "3 095.00",
  },
  {
    id: "8",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_b0540d99-798f-11ef-8db4-005056012b6d/-1_600.jpg",
    name: "Смартфон Apple iPhone 16 128GB Pink (MYEA3HN/A)",
    count: "3 999.00",
  },
  {
    id: "9",
    imgLink:
      "https://img.5element.by/import/images/ut/goods/good_f6d8b182-3dfa-11ef-8db4-005056012b6d/-1_600.jpg",
    name: "Вертикальный пылесос Dyson Gen5 Detect Absolute",
    count: "4 989.00",
  },
];
const counterElement = document.querySelector(".counter");

function renderPage() {
  const cardContainer = document.querySelector(".cards");
  cardContainer.innerHTML = "";
  dataBase.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-imgLink", `${item.imgLink}`);
    card.setAttribute("data-id", `${item.id}`);
    card.setAttribute("data-name", `${item.name}`);
    card.setAttribute("data-count", `${item.count}`);
    card.innerHTML = `
          <img
            src="${item.imgLink}"
            alt="${item.name}"
            class="product-image"
          />
          <h3 class="product-title">${item.name}</h3>
          <p class="product-price">${item.count}</p>
          <button class="add-to-cart-btn">В корзину</button>
      `;
    cardContainer.appendChild(card);
  });
  counterElement.innerHTML = localStorage.length;
}

function addToStorage(event) {
  const productCard = event.target.closest(".product-card");
  const productImgLink = productCard.getAttribute("data-imgLink");
  const productName = productCard.getAttribute("data-name");
  const productPrice = productCard.getAttribute("data-count");
  const productId = productCard.getAttribute("data-id");

  const newData = {
    id: productId,
    imgLink: productImgLink,
    name: productName,
    count: productPrice,
  };

  localStorage.setItem(`${productId}`, JSON.stringify(newData));
  counterElement.innerHTML = localStorage.length;
}

renderPage();
const addBtns = document.querySelectorAll(".add-to-cart-btn");
addBtns.forEach((btn) => {
  btn.addEventListener("click", addToStorage);
});
