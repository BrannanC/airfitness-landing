const tablet = window.matchMedia("(max-width: 1022px)");

const popularText = document.querySelector(".popular-text");
const home = document.querySelector(".home");
window.addEventListener("load", () => {
  home.style.opacity = 1;
  setTimeout(() => {
    popularText.style.transform = "translateX(0)";
  }, 500);
});

class Carousel {
  constructor(carElement) {
    this.element = carElement;
    this.left = this.element.querySelector(".left-button");
    this.right = this.element.querySelector(".right-button");
    this.imgs = this.element.querySelectorAll(".top");
    this.numImgs = this.imgs.length;
    this.currentIndex = 0;
    this.cards = this.element.querySelectorAll(".card");
    this.cards[0].style.display = "flex";
    this.cards[1].style.display = tablet.matches ? "none" : "flex";
    this.cards[2].style.display = tablet.matches ? "none" : "flex";
    this.left.addEventListener("click", () => this.leftClick());
    this.right.addEventListener("click", () => this.rightClick());
  }

  leftClick() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.numImgs - 1;
    } else {
      this.currentIndex--;
    }
    this.cards.forEach(x => (x.style.display = "none"));

    if (tablet.matches) {
      this.cards[this.currentIndex].style.display = "flex";
    } else {
      for (let i = 0; i < 3; i++) {
        let index =
          this.currentIndex + i >= this.numImgs
            ? this.currentIndex + i - 5
            : this.currentIndex + i;
        this.cards[index].style.display = "flex";
        this.cards[index].style.order = i;
      }
    }
  }

  rightClick() {
    this.cards.forEach(x => (x.style.display = "none"));

    if (this.currentIndex === this.numImgs - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    if (tablet.matches) {
      this.cards[this.currentIndex].style.display = "flex";
    } else {
      for (let i = 0; i < 3; i++) {
        let index =
          this.currentIndex + i >= this.numImgs
            ? this.currentIndex + i - 5
            : this.currentIndex + i;
        this.cards[index].style.display = "flex";
        this.cards[index].style.order = i;
      }
    }
  }
}

let carousel = new Carousel(document.querySelector(".carousel"));
window.addEventListener(
  "resize",
  () => (carousel = new Carousel(document.querySelector(".carousel")))
);
