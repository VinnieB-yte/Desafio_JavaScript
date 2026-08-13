let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }
      
    static Start(arr){
        
        if(arr && arr.length > 0){

            Carousel._sequence = 0;
            Carousel._arr = arr;
            Carousel._size = arr.length;
            Carousel.AtualizarTela(); //start
            Carousel._interval = setInterval(() => Carousel.Next(),4000);
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static AtualizarTela(){
        const carouselDiv = document.querySelector("#carousel");
        carouselDiv.style.display = "flex";
        carouselDiv.style.justifyContent = "center";
        carouselDiv.style.overflow = "hidden";
        carouselDiv.style.objectFit = "cover";

        const carouselTitle = document.querySelector("#carousel-title");
        carouselTitle.style.color = "#000000";
        carouselTitle.style.textDecoration = "none";
        carouselTitle.style.textAlign = "center";
        carouselTitle.style.fontSize = "18px";

        const atual = Carousel._arr[Carousel._sequence];

        carouselDiv.innerHTML = `<img src="img/${atual.image}">`;
        carouselTitle.innerHTML = `<a href="${atual.url}">${atual.title}</a>`

    }

    static Next(){
        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._arr.length){
            Carousel._sequence = 0;
        }

        Carousel.AtualizarTela();
    }

    static Prev(){
        Carousel._sequence--;

        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._arr.length - 1;
        }

        Carousel.AtualizarTela();
    }
};
    