const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");


// main toggle
menuBtn.addEventListener('click', () => {
  toggle();
})

// toggle on item click if open 

menuItem.forEach(item => {
  item.addEventListener('click', ()=>{
    if(menuBtn.classList.contains('open')){
      toggle();
    }
  });
});

function toggle(){
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
}


//Script for form to sheets

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbwsfkXw1-nReSdl64ae76Ni129U_VWqdEXRfXcAzOnzoltB_HDLyynHlAg3Bzn4k0JjUg/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function (rooms) { 
      alert('OK.');
    }
  })
})


// Arrows
// const langCollapse = document.getElementById("")
const collapseItem = document.querySelectorAll(".Collapsed");

collapseItem.forEach(item => {
  if(item.parentElement.parentElement.parentElement.parentElement.children[1].classList.contains("show")){
    item.parentElement.parentElement.children[1].children[0].classList.add("bi-chevron-down");
  }
  item.addEventListener('click', () => {
 
     item.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-down");
     item.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-right");
     
  
      

  
    
  })
  
});
 
