// const Typewriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.deleting = false;
// };

// type method
// Typewriter.prototype.type = function () {
//   // console.log("hello");
//   // current index of word
//   const current = this.wordIndex % this.words.length;
//   // get full text of current word
//   const fulltxt = this.words[current];

//   // check if deleting
//   if (this.deleting) {
//     // remove a character
//     this.txt = fulltxt.substring(0, this.txt.length - 1);
//   } else {
//     // add a character
//     this.txt = fulltxt.substring(0, this.txt.length + 1);
//   }

//   // insert txt into Element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //initial type speed
//   let typeSpeed = 300;
//   if (this.deleting) {
//     typeSpeed /= 2;
//     console.log(typeSpeed);
//   }

//   // if word is complete
//   if (!this.deleting && this.txt === fulltxt) {
//     // make a little pause at end
//     typeSpeed = this.wait;

//     // set deleting to true
//     this.deleting = true;
//   } else if (this.deleting && this.txt === "") {
//     this.deleting = false;

//     // move to next word
//     this.wordIndex++;
//     // pause before start typing
//     typeSpeed = 500;
//   }
//   setTimeout(() => this.type(), typeSpeed);
// };



// es6 class
class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.deleting = false;
  }
  type() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current word
    const fulltxt = this.words[current];

    // check if deleting
    if (this.deleting) {
      // remove a character
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      // add a character
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // insert txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;
    if (this.deleting) {
      typeSpeed /= 2;
      console.log(typeSpeed);
    }

    // if word is complete
    if (!this.deleting && this.txt === fulltxt) {
      // make a little pause at end
      typeSpeed = this.wait;

      // set deleting to true
      this.deleting = true;
    } else if (this.deleting && this.txt === "") {
      this.deleting = false;

      // move to next word
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}


// init on dom load
document.addEventListener("DOMContentLoaded", init);

// init
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // init typewriter
  new Typewriter(txtElement, words, wait);
}