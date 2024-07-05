import BasicTimeline from "./BasicTimeLine";
import ImageCarousel from "./ImageCarrousel";

export default function CurriculumBar({params}) {
    return (
        <div className={`curriculum-outer-section text-left bg-green-200 ${params}`}>
            <h2 className="text-center text-2xl font-bold my-2">Curriculum</h2>
            <BasicTimeline />
            <ImageCarousel />
        </div>
    )
}
