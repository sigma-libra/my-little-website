import { motion } from 'framer-motion';
import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

export default function CurriculumBar({params}) {
    return (
        <motion.div
            className={`curriculum-outer-section text-left bg-dustyRose ${params}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
            <h2 className="font-display italic text-center text-3xl font-normal text-darkGrey my-5">Experience</h2>
            <BasicTimeline />
            <ImageCarousel />
        </motion.div>
    )
}
