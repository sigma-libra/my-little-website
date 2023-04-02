import './CurriculumBar.css';
import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

function CurriculumBar() {
    return (
        <div className="curriculum-outer-section" >
            <div className="curriculum-inner-section">
                <h2>Curriculum</h2>
                <BasicTimeline />
            </div>
            <ImageCarousel />
        </div>
    )
}

export default CurriculumBar;