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
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
