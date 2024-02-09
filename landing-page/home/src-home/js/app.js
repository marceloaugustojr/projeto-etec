// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

function events() {
  
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });

  var menuItems = document.querySelectorAll('.links a');
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      big_wrapper.classList.remove("active");
    });
  });
}

events();



const iframes = document.querySelectorAll('.pagina');
const mainContainer = document.getElementById('content');

mainContainer.addEventListener('scroll', function() {
  const scrollY = mainContainer.scrollTop;

  // Aplicar o mesmo valor de rolagem para todas as iframes
  iframes.forEach(iframe => {
    iframe.contentWindow.scrollTo(0, scrollY);
  });
});

