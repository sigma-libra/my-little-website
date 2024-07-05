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
    console.log(currentIndex);

    return (
        <div className="relative w-full mx-auto mb-20">
            <div className="slider-container relative">
                {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={`${process.env.PUBLIC_URL}/assets/${photo.url}`}
                            alt={photo.title}
                            className={`object-contain mx-auto ${currentIndex === index ? "opacity-100 max-h-[300px]" : "opacity-0 h-0"}`}
                        />
                ))}

                <button
                    onClick={prev}
                    className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded"
                >
                    &lt;
                </button>

                <button
                    onClick={next}
                    className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded"
                >
                    &gt;
                </button>
            </div>

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
