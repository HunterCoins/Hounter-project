window.addEventListener('DOMContentLoaded', () => {
    function deleteNotDigits(src) {
        return +src.replace(/\D/g, '');
    }

    function dropdown() {
        let trigger = document.querySelector('.with__submenu');
        let submenu = document.querySelector('.submenu');
        let arrow = document.querySelector('.submenu__arrow');

        trigger.addEventListener('click', () => {
            submenu.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    }
    dropdown();

    function heroSlider() {
        function changeDotsOpacity() {
            dots.forEach(dot => dot.style.opacity ='.4');
            dots[slideIndex - 1].style.opacity = 1;
        }

        const slides = document.querySelectorAll(".hero__slider-item"),
              slider = document.querySelector(".hero__slider"),
              slideWidth = window.getComputedStyle(slides[0]).width,
              slidesGap = window.getComputedStyle(slides[0]).gap,
              slidesField = document.querySelector('.hero__slider-width');
        let offset = 0,
            slideIndex = 1;

        const indicators = document.createElement('ol'),
              dots = [];
        indicators.classList.add("carousel-indicators");
        slider.append(indicators);

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('dot');

            if (i == 0) {
                dot.style.opacity = 1;
            }

            indicators.append(dot);
            dots.push(dot);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;

                offset = (deleteNotDigits(slideWidth) + deleteNotDigits(slidesGap)) * (slideTo - 1);
                slidesField.style.transform = `translateX(-${offset}px)`;

                changeDotsOpacity();
            }); 
        });
    }
    heroSlider();

    function arrowSlider() {
        const slides = document.querySelectorAll('.featured__slider-item'),
              slide = slides[0],
              slider = document.querySelector('.featured__slider'),
              slideWidth = window.getComputedStyle(slide).width,
              slidesField = document.querySelector('.featured__slider-width'),
              slideGap = window.getComputedStyle(slidesField).gap,
              prev = document.querySelector('.featured__arrows-prev'),
              next = document.querySelector('.featured__arrows-next');

        let offset = 0,
            slideIndex = 0,
            visibleSlides = 3,
            maxSlides = (slides.length%visibleSlides == 0 ? 
                slides.length - visibleSlides : 
                slides.length - slides.length%visibleSlides),
            width = deleteNotDigits(slideWidth) + deleteNotDigits(slideGap);
        
        slidesField.style.width = width * slides.length + 'px';

        next.addEventListener('click', () => {
            slideIndex += visibleSlides;

            if (slideIndex / slides.length >= 1) {
                offset = 0;
                slideIndex = 0;
            } else {
                offset += width * visibleSlides;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            console.log(slideIndex);
            console.log(offset);
        });

        prev.addEventListener('click', () => {

            if (offset == 0) {
                offset = width * maxSlides;
                slideIndex = maxSlides;
            } else {
                offset -= width * visibleSlides;
                slideIndex -= visibleSlides;
            }
            
            slidesField.style.transform = `translateX(-${offset}px)`;

            console.log(slideIndex);
            console.log(offset);
        });
    }
    arrowSlider();
});