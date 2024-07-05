import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

function CurriculumBar() {
    return (
        <div className="curriculum-outer-section text-left w-1/3 h-screen overflow-y-auto bg-green-200">
            <h2 className="text-center">Curriculum</h2>
            <div className="curriculum-inner-section">
                <BasicTimeline />
            </div>
            <ImageCarousel />
        </div>
    )
}

export default CurriculumBar;
