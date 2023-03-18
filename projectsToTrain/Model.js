//    file:///C:/Users/Acer/Desktop/PROJECTS_PHP_JS/JS_train/projectsToTrain/View.html

class Slider
{
    btnPrev = document.getElementById('btn-prev');
     btnNext = document.getElementById('btn-next');
     slides = document.querySelectorAll('.slide');
     dots = document.querySelectorAll('.dot');
     index = 0;

    // remove class active from all elements (slide) and add class active to current element
     activeSlide = (number) => {
    for (let i = 0; i < this.slides.length; i++){
        this.slides[i].classList.remove('active');
    }
    this.slides[number].classList.add('active');
}

     activeDot = (number) => {
    for (let i = 0; i < this.dots.length; i++){
        this.dots[i].classList.remove('active');
    }
    this.dots[number].classList.add('active');
}

     prepareCurrentSlide = (index) =>{
    this.activeSlide(index);
    this.activeDot(index);
}

 nextSlide = () => {
    if(this.index === this.slides.length -1){
        this.index = 0;
        this.prepareCurrentSlide(this.index);
    }else{
        this.index++;
        this.prepareCurrentSlide(this.index);
    }
}

 prevSlide = () => {
    if(this.index === 0){
        this.index = this.slides.length -1;
        this.prepareCurrentSlide(this.index);
    }else{
        this.index--;
        this.prepareCurrentSlide(this.index);
    }
}

// switches pictures by clicking on a point
dotSlider = () => {
    this.dots.forEach((item, indexDot) => {
        item.addEventListener('click', () =>{
            this.index = indexDot;
            this.prepareCurrentSlide(this.index);
        })
    })
}

    nextBtn = () => {
        this.btnNext.addEventListener('click', this.nextSlide);
    }

    prevBtn = () => {
        this.btnPrev.addEventListener('click', this.prevSlide);
    }
}

const slider = new Slider();
slider.nextBtn();
slider.prevBtn();
slider.dotSlider();






















