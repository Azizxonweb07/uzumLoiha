const products = [
  {
    id: 1,
    title: "Kungaboqar yog'i Oila tanlovi, tozalangan, 900 ml",
    category: "Uy-roʻzgʻor buyumlari",
    price: "13 000 so'm",
    oldPrice: "15 000 so'm",
    installment: "1 560 so'm/oyiga",
    rating: "4.9 (4092 sharh)",
    badge: "Eksklyuziv",
    image: "/img/card-img_1.svg",
  },
  {
    id: 2,
    title: "Smartfon Xiaomi Redmi Note 13, 6/128 GB",
    category: "Elektronika",
    price: "2 499 000 so'm",
    oldPrice: "3 010 000 so'm",
    installment: "299 880 so'm/oyiga",
    rating: "5.0 (8 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_2.svg",
  },
  {
    id: 3,
    title: "Kir yuvish kukuni 'Ayoz tazeligi', avtomat, 3 kg",
    category: "Uy-roʻzgʻor buyumlari",
    price: "41 000 so'm",
    oldPrice: "57 000 so'm",
    installment: "4 920 so'm/oyiga",
    rating: "4.5 (1123 sharh)",
    badge: "Eksklyuziv",
    image: "/img/card-img_3.svg",
  },
  {
    id: 4,
    title: "Yangi tug'ilgan chaqaloqlar uchun tana to'plami, 3 dona",
    category: "Kiyim",
    price: "99 000 so'm",
    oldPrice: "160 000 so'm",
    installment: "11 880 so'm/oyiga",
    rating: "5.0 (1 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_4.svg",
  },
  {
    id: 5,
    title: "Pechenye Brownie cookies, 490 g",
    category: "Uy-roʻzgʻor buyumlari",
    price: "36 000 so'm",
    oldPrice: "50 000 so'm",
    installment: "4 320 so'm/oyiga",
    rating: "4.8",
    badge: "Aksiya",
    image: "/img/card-img_5.svg",
  },
  {
    id: 6,
    title: "Televizor Samsung Crystal UHD 4K 43' Smart TV",
    category: "Elektronika",
    price: "4 899 000 so'm",
    oldPrice: "5 530 000 so'm",
    installment: "587 880 so'm/oyiga",
    rating: "5.0 (5 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_6.png",
  },
  {
    id: 7,
    title: "Avtomobil va uy uchun portativ changyutgich",
    category: "Maishiy texnika",
    price: "199 000 so'm",
    oldPrice: "620 000 so'm",
    installment: "23 880 so'm/oyiga",
    rating: "4.7 (32 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_7.png",
  },
  {
    id: 8,
    title: "Sumka shopper ayollar uchun, eko charm",
    category: "Aksessuarlar",
    price: "99 000 so'm",
    oldPrice: "190 000 so'm",
    installment: "11 880 so'm/oyiga",
    rating: "5.0 (4 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_8.png",
  },
  {
    id: 9,
    title: "Smartfon Xiaomi Redmi Note 13 Pro, 8/256 GB",
    category: "Elektronika",
    price: "3 739 000 so'm",
    oldPrice: "5 000 000 so'm",
    installment: "448 680 so'm/oyiga",
    rating: "5.0 (16 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_9.png",
  },
  {
    id: 10,
    title: "Yostiqlar to'plami, bambukdan, gipoallergenli",
    category: "Uy-roʻzgʻor buyumlari",
    price: "89 000 so'm",
    oldPrice: "137 000 so'm",
    installment: "10 680 so'm/oyiga",
    rating: "4.9 (165 sharh)",
    badge: "Aksiya",
    image: "/img/card-img_10.png",
  },
];

const cards = document.querySelector(".cards");

// Mahsulotlarni ekranga chiqarish
products.forEach((item) => {
  const card = document.createElement("div");

  card.classList.add("card");
  card.setAttribute("data-category", item.category);

  card.innerHTML = `
    <div class="card-top">
      <img src="${item.image}" alt="" />
    </div>
    <div class="card-center">
      <p class="card-title">${item.title}</p>
      <p>⭐️${item.rating}</p>
      <p>${item.installment}</p>
    </div>
    <div class="card-bottom">
      <div class="card-b-left">
        <p>${item.oldPrice}</p>
        <p class="card-bottom_price">${item.price}</p>
      </div>
      <div class="card-b-right">
        <img src="img/div.slot.svg" alt="" />
      </div>
    </div>
  `;

  cards.appendChild(card);
});

function clickBtn(value) {
  const buttons = document.querySelectorAll(".button-value");

  // Tugmalarning faollik holatini (hide klassi orqali) o'zgartirish
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("hide");
    } else {
      button.classList.remove("hide");
    }
  });

  // Barcha kartalarni filter qilish
  const allCards = document.querySelectorAll(".cards .card");

  allCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");

    // Kategoriya mos kelsa ko'rsatish, aks holda yashirish
    if (value.toUpperCase() === cardCategory.toUpperCase()) {
      card.classList.remove("none");
    } else {
      card.classList.add("none");
    }
  });

  hidden();
}

function hidden() {
  const heroTop = document.querySelector(".hero-top");
  heroTop.classList.add("see");
}

const searchInput = document.querySelector("#searchInput");
const allCards = document.querySelectorAll(".cards .card");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  allCards.forEach((card) => {
    const cardTitle = card.querySelector(".card-title").innerText.toLowerCase();

    if (cardTitle.includes(searchValue)) {
      card.classList.remove("none");
    } else {
      card.classList.add("none");
    }
  });

  hidden();
});
