// // __ Slider __

let testimonials = document.getElementsByClassName('testimonial');
let currentIndex = 0;

// VIS CURRENTINDEX
showTestimonial(currentIndex);

// LYT TIL VENSTRE PIL
let leftArrows = document.getElementsByClassName('leftarrow');

for (let i = 0 ; i < leftArrows.length ; i++) {
    leftArrows[i].addEventListener('click', function() {

        if (currentIndex === 0) {
            //TRUE
            currentIndex = testimonials.length - 1;
            showTestimonial(currentIndex);

        } else {
            //FALSE
            currentIndex = currentIndex - 1;
            showTestimonial(currentIndex);
        }
    });
}

// LYT TIL HØJRE PIL
let rightArrows = document.getElementsByClassName('rightarrow');

for (let i = 0; i < rightArrows.length; i++) {
    rightArrows[i].addEventListener('click', function() {

        if (currentIndex === testimonials.length - 1) {
            currentIndex = 0;
            showTestimonial(currentIndex);
        } else {
            currentIndex = currentIndex + 1;
            showTestimonial(currentIndex);
        }
    });
}

// NÅR PIL ER KLIKKET, AKTIVER DENNE FUNKTION.
// KØRER ALLE TESTIMONIAL INDEX'ER IGENNEM OG SER, OM DE ER LIG MED CURRENTINDEX.
// FJERNER 'active'-CLASS HVIS NEJ, TILFØJER HVIS JA
function showTestimonial(index) {
    for (let i = 0; i < testimonials.length; i++) {
        if (i === index) {
            testimonials[i].classList.add('active');
        } else {
            testimonials[i].classList.remove('active');
        }
    }
};


