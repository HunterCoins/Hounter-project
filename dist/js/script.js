window.addEventListener('DOMContentLoaded', () => {

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

    function slider() {
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
        

        function deleteNotDigits(src) {
            return +src.replace(/\D/g, '');
        }

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
    slider();

});