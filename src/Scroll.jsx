import React, { useRef, useEffect } from 'react';
import "./App.css";

function Scroll() {
    const scrollRef = useRef(null);

    const observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hiddo')
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hiddo')
            }
        })
    });

    useEffect(() => {
        const element = scrollRef.current; // accessing the DOM element
        if (element) {
            const innerElements = element.querySelectorAll('.inner-element'); // Example: Selecting an element with a class name
            innerElements.forEach((el) => observer.observe(el));
        }
    }, []);


    return (
        <div ref={scrollRef}>
            <section className='justify-center items-center'>
                <div class="mouse"></div>
            </section>

            <section className='inner-element mt-2'>
                <h1>This is a demo</h1>
            </section>

            <section className='inner-element mt-2'>
                <h2>
                    The things you own end up owning you.
                </h2>
            </section>

            <section className='inner-element mt-2'>
                <h1>It's only after you lose everything</h1>
            </section>

            <section className='inner-element mt-2'>
                <h1>that you're free to do anything.</h1>
            </section>

            <section className='inner-element mt-2'>
                <h2>THE END.</h2>
            </section>
        </div>
    )
}

export default Scroll