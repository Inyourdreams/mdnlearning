let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === "images/redskull.jpg") {
    myImage.setAttribute('src', 'images/katara2.jpg');
  } else {
    myImage.setAttribute ('src', 'images/redskull.jpg');
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt("Please enter your name", name);
  localStorage.setItem('name', myName);
  myHeading.innerHTML = "mozzila is cool, " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "mozzila is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}