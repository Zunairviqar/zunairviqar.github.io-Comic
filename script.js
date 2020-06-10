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
var txt2 = 'Tonya Zhang, Sophomore, From China, Visual Arts Major, Passionate about illustration and graphic design, Cooks omelettes.'; /* The text */
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
console.log(txt2.length);

setTimeout(function () {
    $("#ThirdImage").show()
}, 11000);

var k = 0;
var txt3 = 'Yahia Beethoven, Sophomore, From Egypt, Enjoys sushi after playing squash.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#ThirdImage").ready(function typeWriter3() {
      if (k < txt3.length) {
        document.getElementById("image3").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
      }
    });
}, 11000);
console.log(txt3.length);

setTimeout(function () {
    $("#FourthImage").show()
}, 15500);

var l = 0;
var txt4 = 'Joonha Yu, Sophomore, CS Major, Sleeping at 6:30 AM to make a webpage.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#FourthImage").ready(function typeWriter4() {
      if (l < txt4.length) {
        document.getElementById("image4").innerHTML += txt4.charAt(l);
        l++;
        setTimeout(typeWriter4, speed);
      }
    });
}, 15500);
console.log(txt4.length);


setTimeout(function () {
    $(".UnderlineEffect").show()
}, 19500);

var m = 0;
var txt5 = 'Are you being hacked or blackmailed?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(txt5.length);
$(document).ready(function typeWriter5() {
  if (m < txt5.length) {
    document.getElementById("line1").innerHTML += txt5.charAt(m);
    m++;
    setTimeout(typeWriter5, speed);
  }
});

var n = 0;
var txt6 = 'Reach out to us!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $(".Contact-text2").ready(function typeWriter6() {
      if (n < txt6.length) {
        document.getElementById("line2").innerHTML += txt6.charAt(n);
        n++;
        setTimeout(typeWriter6, speed);
      }
    });
}, 2500);

var o = 0;
var txt7 = 'First Name:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $(".Contact-text3").ready(function typeWriter7() {
      if (o < txt7.length) {
        document.getElementById("line3").innerHTML += txt7.charAt(o);
        o++;
        setTimeout(typeWriter7, speed);
      }
    });
}, 4500);

var x = 0;
var p = 0;
var txt8 = 'Last Name:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13) {
          $(".Contact-text4").ready(function typeWriter8() {
            if (p < txt8.length) {
              document.getElementById("line4").innerHTML += txt8.charAt(p);
              p++;
              setTimeout(typeWriter8, speed);
            }
            x = 1
          });
      }
});
var q = 0;
var txt9 = 'Country:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==1) {
          $(".Contact-text5").ready(function typeWriter9() {
            if (q < txt9.length) {
              document.getElementById("line5").innerHTML += txt9.charAt(q);
              q++;
              setTimeout(typeWriter9, speed);
            }
            x = 2
          });
      }
});

var r = 0;
var txt10 = 'Email:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==2) {
          $(".Contact-text6").ready(function typeWriter10() {
            if (r < txt10.length) {
              document.getElementById("line6").innerHTML += txt10.charAt(r);
              r++;
              setTimeout(typeWriter10, speed);
            }
            x = 3
          });
      }
});

var s = 0;
var txt11 = 'Any Details?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==3) {
          $(".Contact-text7").ready(function typeWriter11() {
            if (s < txt11.length) {
              document.getElementById("line7").innerHTML += txt11.charAt(s);
              s++;
              setTimeout(typeWriter11, speed);
            }
            x = 4
          });
      }
});

var t = 0;
var txt12 = 'Our team will be in touch with you shortly'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==4) {
          $(".Contact-text8").ready(function typeWriter12() {
            if (t < txt12.length) {
              document.getElementById("line8").innerHTML += txt12.charAt(t);
              t++;
              setTimeout(typeWriter12, speed);
            }
            x = 5
          });
      }
});
