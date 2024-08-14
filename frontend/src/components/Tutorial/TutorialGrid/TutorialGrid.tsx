import { tutorials, ITutorial } from "../../../utils/tutorial-helper";
import TutorialCard from "../TutorialCard/TutorialCard";

const TutorialGrid = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-10">
        {tutorials.map((tutorial: ITutorial, index: number) => (
          <TutorialCard key={index} {...tutorial} />
        ))}
      </div>
    </div>
  );
};

export default TutorialGrid;
