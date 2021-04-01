const menuBtn = document.getElementById("menu-btn");

// main toggle
menuBtn.addEventListener('click', () => {
  console.log('click')
  menuBtn.classList.toggle('open');
});