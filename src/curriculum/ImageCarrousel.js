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
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="relative w-full mx-auto mb-20">
            {/* Render the carousel */}
            <div className="slider-container relative overflow-hidden">
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            currentIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/${photo.url}`}
                            alt={photo.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}

                {/* Previous button */}
                <button
                    onClick={prev}
                    className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded"
                >
                    &lt;
                </button>

                {/* Next button */}
                <button
                    onClick={next}
                    className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded"
                >
                    &gt;
                </button>
            </div>

            {/* Render dots indicator */}
            <div className="flex justify-center mt-4">
                {photos.map((photo, index) => (
                    <span
                        key={photo.id}
                        className={`dot mx-1 rounded-full h-3 w-3 bg-gray-400 ${
                            currentIndex === index ? 'bg-gray-800' : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;
