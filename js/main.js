class Carousel {
    constructor(carElement){
        this.element = carElement;
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        this.imgs = this.element.querySelectorAll('.top');
        this.numImgs = this.imgs.length;
        this.currentIndex = 0;
        this.cards = this.element.querySelectorAll('.card');
        this.cards[0].style.display = "flex";
        this.cards[1].style.display = "flex";
        this.cards[2].style.display = "flex";
        this.left.addEventListener('click', () => this.leftClick());
        this.right.addEventListener('click', () => this.rightClick());
    }

    leftClick(){
        if(this.currentIndex === 0){
            this.currentIndex = this.numImgs - 1;
        } else {
            this.currentIndex--;
        }
        console.log(this.currentIndex);
        this.cards.forEach(x => x.style.display = 'none');

        for(let i = 0; i < 3; i++){
            let index = this.currentIndex + i >= this.numImgs ? this.currentIndex + i - 5 : this.currentIndex + i;
            console.log('index', index, this.cards[index]);
            this.cards[index].style.display = 'flex';  
            this.cards[index].style.order = i;  

        }
    }

    rightClick(){
        this.cards.forEach(x => x.style.display = 'none');
        
        if(this.currentIndex === this.numImgs - 1){
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }

        for(let i = 0; i < 3; i++){
            let index = this.currentIndex + i >= this.numImgs ? this.currentIndex + i - 5 : this.currentIndex + i;
            this.cards[index].style.display = 'flex';  
            this.cards[index].style.order = i;  
        }    
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));