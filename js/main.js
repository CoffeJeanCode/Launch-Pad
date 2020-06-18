document.addEventListener("keydown", e => {
  let code = e.which || e.keyCode;
  code = String.fromCharCode(code);
  let v = getValue(code);
  document.getElementsByTagName("audio")[v].currentTime = 0;
  document.getElementsByTagName("audio")[v].play();
});

function getValue(code) {
  code = code.toLowerCase();
  if (code === "1") {
    return 0;
  } else if (code === "2") {
    return 1;
  } else if (code === "3") {
    return 2;
  } else if (code === "q") {
    return 3;
  } else if (code === "w") {
    return 4;
  } else if (code === "e") {
    return 5;
  } else if (code === "a") {
    return 6;
  } else if (code === "s") {
    return 7;
  } else if (code === "d") {
    return 8;
  } else if (code === "z") {
    return 9;
  } else if (code === "x") {
    return 10;
  } else if (code === "c") {
    return 11;
  } else if (code === "4") {
    return 12;
  } else if (code === "r") {
    return 13;
  } else if (code === "f") {
    return 14;
  } else if (code === "v") {
    return 15;
  } else if (code === "5") {
    return 16;
  } else if (code === "t") {
    return 17;
  } else if (code === "g") {
    return 18;
  } else if (code === "b") {
    return 19;
  } else {
    return "";
  }
}
