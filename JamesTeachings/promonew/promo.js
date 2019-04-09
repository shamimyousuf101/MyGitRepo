const boxes = document.querySelectorAll(".step-box");
const overlay = document.querySelector(".property-overlay");
var colorclass;

boxes.forEach(function (item, index) {
  item.addEventListener('click', function () {    
    overlay.classList.remove(colorclass);   
    colorclass = boxes[index].getAttribute('class').split(" ")[1];
    overlay.classList.add(colorclass);      
    overlay.classList.add('expand');      
  });
});

const close = document.querySelector(".close-button");

close.addEventListener("click", function(){
  let e = document.querySelector(".property-overlay");
  e.classList.remove('expand');
})

