//call nav bar pages to reviews
function scrollToSection(reviews) {
    var section = document.getElementById(reviews);
    var top= section.offsetTop;
    window.scrollTo(0,top);
}
//call to service page
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var top = section.offsetTop;
    window.scrollTo(0, top);
  }
  
  document.querySelector('#services a').addEventListener('click', function() {
    scrollToSection('container');
  });

  //modal to comfirm booking
let bookBtn = document.getElementById('book-button');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');
//Event Listeners

bookBtn.addEventListener('click',function(e){
    modalContainer.style.display = 'block';
    e.preventDefault();
})

closeBtn.addEventListener('click',function(){
    modalContainer.style.display = 'none';
})
window.addEventListener('click',function(e){
    //if u dont use the object event then u won't be able to display modal when you click button
    if(e.target === modalContainer){
    modalContainer.style.display = 'none';
    }
})