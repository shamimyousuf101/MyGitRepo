
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function run() {
  let sheetToBeRemoved = document.getElementById('styleSheetId');
  if(sheetToBeRemoved!=null){
    let sheetParent = sheetToBeRemoved.parentNode;
    sheetParent.removeChild(sheetToBeRemoved);
  }
  let a = document.querySelector("#inputTextToSave").value;
  let sheet = document.createElement('style')
  let att = document.createAttribute("id");      
  att.value = "styleSheetId";                         
  sheet.setAttributeNode(att); 
  sheet.innerHTML = a;
  document.body.appendChild(sheet);
}

function makeUL(array) {
  const ul = document.querySelector('.items');
  document.querySelector('ul');
  let innerHtml = '';
  for(let i = 0; i < textData.length; i++ ) {
    innerHtml += `<li class="item">${textData[i]}</li>`;
  }
  ul.innerHTML = innerHtml;
}