// https://www.w3schools.com/jquery/jquery_fade.asp
$(document).ready(function(){
  $(".bg").click(function(){
    $("#Menu").fadeIn("slow");
  });
});

$(document).ready(function(){
  $(".bg").click(function(){
    $(".Shutuptext").fadeOut("fast");
  });
});
// https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'Zunair Viqar, Sophomore, From Pakistan, Enjoys chicken dinners in PUBG.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(txt.length);
$(document).ready(function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("image1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
});

setTimeout(function () {
    $("#SecondImage").show()
}, 4000);

var j = 0;
var txt2 = 'Hasin, Sophomore, From Pakistan, Enjoys chicken dinners in PUBG.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#SecondImage").ready(function typeWriter2() {
      if (j < txt2.length) {
        document.getElementById("image2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }
    });
}, 4000);
// console.log(txt2.length);
