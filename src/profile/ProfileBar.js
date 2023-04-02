import './ProfileBar.css';

const IdCard = () => {
    return (
        <div>
            <h1>Sabrina Kall</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/images/profile_photo.jpg`} height={200} alt="profile_photo" />
            <h2>Software Engineer</h2>
            <p>Born 10th October 1996</p>
            <nav className="links-container">
                <a href="https://www.linkedin.com/in/sabrina-kall/" target="_blank" rel="noreferrer">linkedin</a>
                <a href="https://github.com/sigma-libra" target="_blank" rel="noreferrer">github</a>
                <a href="https://stackoverflow.com/users/8788182/sigma1510" target="_blank" rel="noreferrer">stackoverflow</a>
            </nav>
        </div>
    )
}

const LanguageCard = () => {
    return (
        <div className="profile-card">
            <h2>Languages</h2>
            <p>English</p>
            <p>French</p>
            <p>(Swiss) German</p>
            <p>Spanish</p>
        </div>
    )
}

const PublicationsCard = () => {
    return (
        <div className="profile-card">
            <h2>Publications</h2>
            <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=52RWrB6AVd8=&t=1" target="_blank" rel="noreferrer">Credential Digger</a>
            <p>Using Federated Learning to teach an AI to recognize passwords.</p>
            <a href="https://www.epfl.ch/labs/dedis/wp-content/uploads/2020/01/report-2019-1-Sabrina-Kall.pdf" target="_blank" rel="noreferrer">Know-Thy-Neighbor</a>
            <p>Using message latency to identify malicious nodes in a blockchain.</p>

        </div>
    )
}

function ProfileBar() {
    return (
        <div className="profile-section">
            <IdCard />
            <LanguageCard />
            <PublicationsCard />
        </div>)
}


export default ProfileBar;