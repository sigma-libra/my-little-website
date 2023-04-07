import './CurriculumBar.css';
import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

function CurriculumBar() {
    return (
        <div className="curriculum-outer-section" >
            <h2 style={{ textAlign: 'center' }}>Curriculum</h2>
            <div className="curriculum-inner-section">
                <BasicTimeline />
            </div>
            <ImageCarousel />
        </div>
    )
}

export default CurriculumBar;