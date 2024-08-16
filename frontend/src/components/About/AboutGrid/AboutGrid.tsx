import { groupMembers } from '../../../utils/about-helper';
import GroupMemberCard from '../AboutCard/AboutCard';

const GroupGrid = () => {
    console.info(groupMembers.length);
    return (
        <div className="w-full max-w-[1250px] mx-auto py-10">
            <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-10">
                {groupMembers.map((member, index) => (
                    <GroupMemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default GroupGrid;
