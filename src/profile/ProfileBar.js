import React from 'react';
import { motion } from 'framer-motion';
import { MakeLink } from "../helpers";

const COLUMN_DELAY = 0.5;

const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: COLUMN_DELAY + i * 0.1, ease: [0.25, 1, 0.5, 1] }
    })
};


const IdCard = () => {
    return (
        <div className="text-center">
            <motion.h1 custom={0} variants={cardVariants} initial="hidden" animate="visible"
                className="font-display text-white text-7xl font-light tracking-tight mt-10 mb-3 px-4 leading-[1.05]">
                Sabrina Kall
            </motion.h1>
            <motion.img custom={1} variants={cardVariants} initial="hidden" animate="visible"
                src={`${process.env.PUBLIC_URL}/assets/images/profile_photo.jpg`}
                alt="Sabrina Kall, software engineer"
                className="h-48 mx-auto rounded-lg ring-1 ring-cactusGreen/40 mt-1" />
            <motion.h2 custom={2} variants={cardVariants} initial="hidden" animate="visible"
                className="font-sans text-xs font-medium tracking-[0.22em] uppercase text-white mt-3 mb-1">
                Fullstack Software Engineer
            </motion.h2>
            <motion.h3 custom={3} variants={cardVariants} initial="hidden" animate="visible"
                className="font-sans text-xs font-normal tracking-[0.15em] uppercase text-white/50 my-1">
                Based in the USA
            </motion.h3>
            <motion.nav custom={4} variants={cardVariants} initial="hidden" animate="visible"
                className="flex justify-center gap-4 mt-4">
                <MakeLink url="https://www.linkedin.com/in/sabrina-kall/" name="LinkedIn" />
                <MakeLink url="https://github.com/sigma-libra" name="GitHub" />
                <MakeLink url="https://stackoverflow.com/users/8788182/sigma1510" name="StackOverflow" />
                <MakeLink url="https://sigma-libra.github.io/my-little-website/assets/files/sabrina_kall_cv.pdf" name="CV" />
            </motion.nav>
            <motion.nav custom={5} variants={cardVariants} initial="hidden" animate="visible"
                className="flex justify-center gap-4 mt-2">
                <MakeLink url="https://play.google.com/store/apps/developer?id=sigma-libra" name="My Apps" />
                <MakeLink url="https://whatistechword.com" name="My Tech Blog" />
                <MakeLink url="https://huggingface.co/sigma-libra" name="HuggingFace" />
            </motion.nav>
        </div>
    )
}

const LanguageCard = () => {
    return (
        <div className="profile-card bg-cactusGreen mx-4 my-4 p-4 border-2 border-white/40 text-center">
            <h2 className="font-display italic text-2xl font-normal text-roseDark mb-3">Languages</h2>
            <p className="font-sans text-base leading-7 text-forestDark">English</p>
            <p className="font-sans text-base leading-7 text-forestDark">French</p>
            <p className="font-sans text-base leading-7 text-forestDark">Swiss German</p>
            <p className="font-sans text-base leading-7 text-forestDark">Spanish</p>
        </div>
    )
}

const PublicationsCard = () => {
    return (
        <div className="profile-card bg-cactusGreen mx-4 my-4 p-4 border-2 border-white/40 text-center">
            <h2 className="font-display italic text-2xl font-normal text-roseDark mb-3">Publications</h2>
            <div className="mb-3">
              <MakeLink url="https://www.scitepress.org/PublicationsDetail.aspx?ID=52RWrB6AVd8=&t=1" name="Credential Digger" className="font-display italic text-xl font-normal text-forestDark underline decoration-forestDark/30 hover:text-roseDark hover:decoration-roseDark/50 transition-colors duration-200"/>
              <p className="font-sans text-base text-forestDark/80 mt-1 leading-relaxed">Using Federated Learning to teach an AI to recognize passwords.</p>
            </div>
            <div>
              <MakeLink url="https://www.epfl.ch/labs/dedis/wp-content/uploads/2020/01/report-2019-1-Sabrina-Kall.pdf" name="Know-Thy-Neighbor" className="font-display italic text-xl font-normal text-forestDark underline decoration-forestDark/30 hover:text-roseDark hover:decoration-roseDark/50 transition-colors duration-200"/>
              <p className="font-sans text-base text-forestDark/80 mt-1 leading-relaxed">Using message latency to identify malicious nodes in a blockchain.</p>
            </div>
        </div>
    )
}

export default function ProfileBar({params}) {
    return (
        <motion.div
            className={`profile-section text-white bg-forestDark ${params}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: COLUMN_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
            <IdCard />
            <div className="border-t border-cactusGreen/20 mx-6 mt-4 mb-2" />
            <LanguageCard />
            <PublicationsCard />
        </motion.div>
    )
}
