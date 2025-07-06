// Hamburger menüsünü açma kapama butonu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Hakkında bölümündeki metni kısaltma ve gösterme işlevselliği
document.addEventListener("DOMContentLoaded", function () {
  const fullText = document.getElementById("about-full-text");
  const shortText = document.getElementById("about-short-text");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const heartIcons = document.querySelectorAll(".fa-heart");
  // İlk 200 karakteri göstermek için substring kullandım
  const fullContent = fullText.textContent;
  shortText.textContent = fullContent.substring(0, 200) + "...";
  fullText.style.display = "none"; // Tam metni gizle

  // Daha Fazla Gör butonu
  showMoreBtn.addEventListener("click", function () {
    fullText.style.display = "block";
    shortText.style.display = "none";
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline-block";
  });

  // Daha Az Gör butonu
  showLessBtn.addEventListener("click", function () {
    fullText.style.display = "none";
    shortText.style.display = "block";
    showMoreBtn.style.display = "inline-block";
    showLessBtn.style.display = "none";
  });

  // favorilere ekeleme fonksiyonu
  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

// Aktif linki kırmızı yapmak için scroll ve tıklama ile kontrol ettim
// navbar alanımda bulunan sayfaları bir array içinde oluşturdum
const sections = ["home", "episode-section", "about"];
//querySelectorAll ile navbar alanındaki linklere ulaştım.
const navLinks = document.querySelectorAll(".nav-link");

// aktif link belirlemek için bir fonksiyon oluşturdum
//scroll da bu fonksyionu çağırdım
function setActiveLink() {
  let index = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i]);
    if (
      section &&
      window.scrollY + 200 < section.offsetTop + section.offsetHeight
    ) {
      index = i;
      break;
    }
  }
  // linkleri forEach kullanarak kontrol ettim ve aktif olanı belirleyim css atadım
  navLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
// scroll takip ederek aktif linki belirlemeye çalıştım
window.addEventListener("scroll", setActiveLink);
window.addEventListener("DOMContentLoaded", setActiveLink);

// Tıklama ile de aktifliği güncelledim buradada
navLinks.forEach((link, i) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
