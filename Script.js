let var1 = document.querySelector("#menu");
let var2 = document.querySelector("#nav_links");

var1.addEventListener("click", function () {
  var2.classList.toggle('active');
});
