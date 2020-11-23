// Function expression to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burguer-menu-icon").addEventListener("click", ()=>{
  selectElement(".nav-list").classList.toggle("active");
  selectElement(".burguer-menu-icon").classList.toggle("toggle")
});