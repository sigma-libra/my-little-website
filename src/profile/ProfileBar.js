import React from 'react';
import { MakeLink } from "../helpers";


const IdCard = () => {
    return (
        <div className="text-center">
            <h1 className="text-white text-4xl font-bold my-3">Sabrina Kall</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/images/profile_photo.jpg`} alt="profile_photo" className="h-[200px] mx-auto" />
            <h2 className="text-white text-4xl font-bold my-3">Fullstack Software Engineer</h2>
            <h3 className="text-mossGreen text-2xl font-bold my-3">Currently in: USA</h3>
            <nav className="flex justify-center gap-4 mt-4">
                <MakeLink url="https://www.linkedin.com/in/sabrina-kall/" name="LinkedIn" />
                <MakeLink url="https://github.com/sigma-libra" name="Github" />
                <MakeLink url="https://stackoverflow.com/users/8788182/sigma1510" name="StackOverflow" />
                <MakeLink url="https://sigma-libra.github.io/my-little-website/assets/files/sabrina_kall_cv.pdf" name="CV" />
            </nav>
            <nav className="flex justify-center gap-4 mt-2">
                <MakeLink url="https://play.google.com/store/apps/developer?id=sigma-libra" name="My apps" />
                <MakeLink url="https://whatistechword.com" name="My Tech Blog" />
                <MakeLink url="https://huggingface.co/sigma-libra" name="My HuggingFace"/>
            </nav>
        </div>
    )
}

const LanguageCard = () => {
    return (
        <div className="profile-card bg-cactusGreen mx-4 my-4 p-4 border-2 border-white text-white text-center">
            <h2 className="text-2xl my-2">Languages</h2>
            <p>English</p>
            <p>French</p>
            <p>(Swiss) German</p>
            <p>Spanish</p>
        </div>
    )
}

const PublicationsCard = () => {
    return (
        <div className="profile-card bg-cactusGreen mx-4 my-4 p-4 border-2 border-white text-white  text-center">
            <h2 className="text-2xl my-2">Publications</h2>
            <MakeLink url="https://www.scitepress.org/PublicationsDetail.aspx?ID=52RWrB6AVd8=&t=1" name="Credential Digger"/>
            <p>Using Federated Learning to teach an AI to recognize passwords.</p>
            <MakeLink url="https://www.epfl.ch/labs/dedis/wp-content/uploads/2020/01/report-2019-1-Sabrina-Kall.pdf" name="Know-Thy-Neighbor"/>
            <p>Using message latency to identify malicious nodes in a blockchain.</p>
        </div>
    )
}

export default function ProfileBar({params}) {
    return (
        <div className={`profile-section text-white bg-gray-900 ${params}`}>
            <IdCard />
            <LanguageCard />
            <PublicationsCard />
        </div>
    )
}
