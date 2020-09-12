var sounds = [
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
  "sounds/snare.mp3",
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    sound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  sound(e.key);
  buttonAnimation(e.key);
});

function sound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio(sounds[0]);
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio(sounds[1]);
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio(sounds[2]);
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio(sounds[3]);
      tom4.play();
      break;
    case "j":
      var snare = new Audio(sounds[4]);
      snare.play();
      break;
    case "k":
      var crash = new Audio(sounds[5]);
      crash.play();
      break;
    case "l":
      var kickBass = new Audio(sounds[6]);
      kickBass.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed", "white");
  setTimeout(function () {
    activeButton.classList.remove("pressed", "white");
  }, 100);
}

//var button = this.innerHTML;

//Versuch das ganze mit tasteneingaben zu machen ????
// document.addEventListener("keypress", logKey);

// function logKey(e) {
//   button = e.key;
//   handleClick(button);
// }

// test1 = (id) => {
//   if (id === "w") {
//     document.getElementById("w").setAttribute("style", "color: white");
//   }
//   if (id === "a") {
//     document.getElementById("a").setAttribute("style", "color: white");
//   }
// };

// function handleClick(button) {
//   switch (button) {
//     case "w":
//       audio = new Audio(sounds[0]);
//       audio.play();
//       //document.getElementById("w").setAttribute("style", "color: white");
//       //$("#w").fadeOut(100).fadeIn(100);
//       test1("w");
//       break;
//     case "a":
//       audio = new Audio(sounds[1]);
//       audio.play();
//       //document.getElementById("a").setAttribute("style", "color: white");
//       test1("a");
//       break;
//     case "s":
//       audio = new Audio(sounds[2]);
//       audio.play();

//       break;
//     case "d":
//       audio = new Audio(sounds[3]);
//       audio.play();
//       break;
//     case "j":
//       audio = new Audio(sounds[4]);
//       audio.play();
//       break;
//     case "k":
//       audio = new Audio(sounds[5]);
//       audio.play();
//       break;
//     case "l":
//       audio = new Audio(sounds[6]);
//       audio.play();
//       break;

//     default:
//       break;
//   }

//   // if (button === "w") {
//   //   let audio = new Audio(sounds[0]);
//   //   audio.play();
//   // } else if (button === "a") {
//   //   let audio = new Audio(sounds[1]);
//   //   audio.play();
//   // } else if (button === "s") {
//   //   let audio = new Audio(sounds[2]);
//   //   audio.play();
//   // }

//   //console.log(this.innerHTML);
// }

/*with anonymous function it looks like this: 
function () {
  alert('I got clicked!')
}

document.querySelectorAll('.drum')[i].addEventListener('click', function(){alert('I got clicked!')})

--> anonymous functioins are with out function name 


*/
