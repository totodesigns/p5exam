let testimonials = document.getElementsByClassName('testimonial');
let currentIndex = 0;

showTestimonial(currentIndex);

let leftArrows = document.getElementsByClassName('leftarrow');
for (let i = 0 ; i < leftArrows.length ; i++) {
    leftArrows[i].addEventListener('click', function() {

        if (currentIndex === 0) {
            currentIndex = testimonials.length - 1;
            showTestimonial(currentIndex);
        } else {
            currentIndex = currentIndex - 1;
            showTestimonial(currentIndex);
        }
    });
}

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

function showTestimonial(index) {
    for (let i = 0; i < testimonials.length; i++) {
        if (i === index) {
            testimonials[i].classList.add('active');
        } else {
            testimonials[i].classList.remove('active');
        }
    }
};


