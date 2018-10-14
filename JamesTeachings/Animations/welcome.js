document.addEventListener("click", pause);

function pause(event){
  const element1 = document.querySelector(".line1");
  const element2 = document.querySelector(".line2");
  element1.className = "paused"
  element2.className = "paused"
  const linktogamesys = document.querySelector(".linktogamesys");
  linktogamesys.style.display="block";
}