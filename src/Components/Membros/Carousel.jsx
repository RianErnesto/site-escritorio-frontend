import React, {useEffect, useState} from 'react';
import './styles/MembrosCarousel.css';
import { MembrosCarouselContent } from './MembrosCarouselGrid';

function MembrosCarousel(props) {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        let slide = document.querySelector(".slide");

        window.addEventListener('keyup', e => {
            switch (e.key) {
                case 'ArrowLeft':
                    moveHandler('left');
                    break;
                case 'ArrowRight':
                    moveHandler('right');
                    break;
                default:
                    break;
            }
        })
    }, []);

    function onArrowClick(direction) {
        moveHandler(direction);
    }

    function moveHandler(direction) {
        let slide = document.querySelector(".slide");
        let card = document.querySelector(".card");
        let slider = document.querySelector(".slider");

        slide.style.transition = `transform 450ms ease-in-out`;

        if (direction !== 'right') {
            if ((slideIndex - 1) * (card.offsetWidth + 80) < 0) {
                slide.style.transform = `translateX(-${0}px)`;
                return;
            }
            slide.style.transform = `translateX(-${(slideIndex - 1) * (card.offsetWidth + 80)}px)`;
            setSlideIndex(slideIndex - 1)
        }
        else {
            if ((slideIndex + 1) * 440 > slide.offsetWidth - slider.offsetWidth) {
                slide.style.transform = `translateX(-${slide.offsetWidth - slider.offsetWidth}px)`;
                return;
            }
            slide.style.transform = `translateX(-${(slideIndex + 1) * (card.offsetWidth + 80)}px)`;
            setSlideIndex(slideIndex + 1)
        }
    }

    return (
        <div className="container">
            <div className="slider">
                <div className="slider__btn-container">
                    <button className="slider__btn slider__btn--left" aria-label="Slide anterior" onClick={() => onArrowClick('left')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                    <button className="slider__btn slider__btn--right" aria-label="Próximo slide" onClick={() => onArrowClick('right')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                <div className="slide">
                    {props.members.map((member, i) => (
                        <MembrosCarouselContent key={i} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MembrosCarousel;