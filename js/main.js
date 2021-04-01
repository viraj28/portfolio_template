const menuBtn = document.querySelector(".menu-btn");

// main toggle
menuBtn.addEventListener('click', () => {
  console.log('click')
  menuBtn.classList.toggle('open');
})