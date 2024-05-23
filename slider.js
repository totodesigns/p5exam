// __________________________ Slider ________________________

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    // Function to show the testimonial at the currentIndex
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    // Event listeners for the arrow buttons
    document.querySelectorAll('.sliderarrows .leftarrow').forEach(leftArrow => {
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
            showTestimonial(currentIndex);
        });
    });

    document.querySelectorAll('.sliderarrows .rightarrow').forEach(rightArrow => {
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
            showTestimonial(currentIndex);
        });
    });

    // Show the first testimonial initially
    showTestimonial(currentIndex);
});


