 // Hamburger menüsünü açma kapama butonu ekledim
      function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
      }
      // Burada hakkında bölümündeki metni kısaltma ve gösterme işlevselliğini ekledim
      // kullnıcı ilk olarak 200 karakterlik kısa metni görecek ve Daha Fazla Gör butonuna tıkladığında tam metni görebilecek
      // daha az gö butonuna tıkladığında ise metni tekrar kısaltabilecek
      document.addEventListener("DOMContentLoaded", function () {
        const fullText = document.getElementById("about-full-text");
        const shortText = document.getElementById("about-short-text");
        const showMoreBtn = document.getElementById("show-more-btn");
        const showLessBtn = document.getElementById("show-less-btn");

        // İlk 200 karakteri gösterilece
        const fullContent = fullText.textContent;
        shortText.textContent = fullContent.substring(0, 200) + "...";
        fullText.style.display = "none"; // Tam metni gizleyiruz

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
      });