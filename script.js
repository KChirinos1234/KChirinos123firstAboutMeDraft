var insta = document.getElementById("Instagram")
var iBlurb = document.getElementById("instaBlurb")

function toggleIBlurb() {
  if(iBlurb.innerHTML == "") {
    iBlurb.innerHTML=("Mainly used for food pics!")
  } else {
    iBlurb.innerHTML=("")
  }
}
insta.addEventListener("mouseover", toggleIBlurb);
insta.addEventListener("mouseout", toggleIBlurb);


var linkedIn = document.getElementById("linkedIn")
var lBlurb = document.getElementById("lBlurb")

function toggleLBlurb() {
  if(lBlurb.innerHTML == "") {
    lBlurb.innerHTML = ("Connect with Me!")
  } else {
    lBlurb.innerHTML = ("")
  }
}

linkedIn.addEventListener("mouseover", toggleLBlurb)
linkedIn.addEventListener("mouseout", toggleLBlurb)


var email = document.getElementById("email")
var eBlurb = document.getElementById("eBlurb")

function toggleEBlurb() {
  if(eBlurb.innerHTML == "") {
    eBlurb.innerHTML = ("Questions? Don't be afraid to email me!")
  } else {
    eBlurb.innerHTML = ("")
  }
}

email.addEventListener("mouseover", toggleEBlurb)
email.addEventListener("mouseout", toggleEBlurb)