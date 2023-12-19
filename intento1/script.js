// Este código se utiliza para mostrar un menú de hamburguesa en dispositivos móviles

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});
