'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// Fungsi untuk menangani klik pada tautan WhatsApp
function handleWhatsAppClick(event, message) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var encodedMessage = encodeURIComponent(message);

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + encodedMessage;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink1 = document.getElementById("whatsappLink1");
whatsappLink1.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin bergabung dengan gym Fitlife, bagaimana caranya?");
});

var whatsappLink2 = document.getElementById("whatsappLink2");
whatsappLink2.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin bergabung dengan gym Fitlife, bagaimana caranya?");
});

var whatsappLink2 = document.getElementById("whatsappLink3");
whatsappLink2.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin bergabung dengan gym Fitlife, bagaimana caranya?");
});



// HTML FORM TO GOOGLE SHEET 
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Email berhasil terkirim!");
    })
  });
});
