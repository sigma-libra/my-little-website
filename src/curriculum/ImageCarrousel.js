import './ImageCarousel.css'
import { useState } from 'react';

const photos = [
    {
        id: 'p1',
        title: 'EPFL',
        url: './images/epfl.jpg',
    },
    {
        id: 'p2',
        title: 'Hiking',
        url: './images/hiking.jpg',
    },
    {
        id: 'p3',
        title: 'Cat',
        url: './images/cat.jpg',
    },
    {
        id: 'p4',
        title: 'Mountains',
        url: './images/mountains.jpg',
    },
    {
        id: 'p5',
        title: 'TU Wien',
        url: './images/tuw.jpg',
    },
    {
        id: 'p6',
        title: 'Antibes',
        url: './images/antibes.jpg',
    },
    {
        id: 'p7',
        title: 'Chicago',
        url: './images/chicago.jpg',
    },
];


function ImageCarousel() {
    // show the photo with this index
    const [currentIndex, setCurrentIndex] = useState(0);

    // move to the next photo
    // if we are at the end, go to the first photo
    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    // move to the previous photo
    // if we are at the beginning, go to the last photo
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <>
            {/* Render the carousel */}
            <div className='slider-container'>
                {photos.map((photo) => (
                    <div
                        key={photo.id}

                        // if the photo is the current photo, show it
                        className={
                            photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                        }
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/${photo.url}`} alt={photo.title} className='photo' />
                    </div>
                ))}

                {/* Previous button */}
                <button onClick={prev} className='prev'>
                    &lt;
                </button>

                {/* Next button */}
                <button onClick={next} className='next'>
                    &gt;
                </button>
            </div>

            {/* Render dots indicator */}
            <div className='dots'>
                {photos.map((photo) => (
                    <span
                        key={photo.id}
                        // highlight the dot that corresponds to the current photo
                        className={
                            photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
                        }
                        // when the user clicks on a dot, go to the corresponding photo
                        onClick={() => setCurrentIndex(photos.indexOf(photo))}
                    ></span>
                ))}
            </div>
        </>
    );
}

export default ImageCarousel;