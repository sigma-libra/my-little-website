import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

export default function CurriculumBar() {
    return (
        <div className="curriculum-outer-section text-left w-1/3 h-screen overflow-y-auto bg-green-200">
            <h2 className="text-center text-2xl font-bold my-2">Curriculum</h2>
            <BasicTimeline />
            <ImageCarousel />
        </div>
    )
}
