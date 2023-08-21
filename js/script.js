function updateStatus() {
  var status = document.getElementById("status");
  var today = new Date();
  var currentHour = today.getHours();

  if (currentHour >= 8 && currentHour < 17) {
    status.textContent = "Buka";
  } else {
    status.textContent = "Tutup";
  }
}

setInterval(updateStatus, 1000);

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

function loadMorePhotos() {
  // Tampilkan foto-foto setelah foto keempat
  var hiddenPhotos = document.querySelectorAll(".foto a:not(:nth-child(-n+4))");
  hiddenPhotos.forEach((photo) => {
    photo.style.display = "inline-block";
  });

  // Sembunyikan tombol "Lihat Foto Lainnya" setelah menampilkan semua foto
  var loadMoreButton = document.getElementById("loadMore");
  loadMoreButton.style.display = "none";
}

// JavaScript untuk tombol "Back to Top"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
