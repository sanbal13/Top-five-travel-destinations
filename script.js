let h3 = document.querySelectorAll("h3");
function getColor() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }

  h3.forEach((elm) => (elm.style.color = code));
}

setInterval(getColor, 1000);

let img = document.querySelectorAll(".img");
function getColor1() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }

  img.forEach((elm) => (elm.style.background = code));
}

setInterval(getColor1, 2000);

let p = document.querySelectorAll(".city p");

function getColor2() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }

  p.forEach((elm) => (elm.style.color = code));
}

setInterval(getColor2, 600);

let date = document.querySelector(".date");
//date.style.color = "#f9234d";

function setTime() {
  const now = new Date();
  let time = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  date.innerText = time;
}

setInterval(setTime, 1000);

let border = document.querySelectorAll(".mum-gallery img");

function getColor3() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }

  border.forEach((elm) => (elm.style.border = code));
}

setInterval(getColor3, 1000);
