const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");

// main toggle
menuBtn.addEventListener('click', () => {
  console.log('click')
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
})