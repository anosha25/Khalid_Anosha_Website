$('.open-close').click(function(){
  console.log("clicked it");
  document.getElementById("side-menu").style.width = "0";
})


$('.ham-icon').click(function(){
  console.log("clicked it 2");
  document.getElementById("side-menu").style.width = "200px";
})