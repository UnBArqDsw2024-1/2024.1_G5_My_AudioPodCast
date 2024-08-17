import { IGroupMember } from '../../../utils/about-helper';

const GroupMemberCard = ({ name, github, img }: IGroupMember) => {
    return (
        <div className="w-[300px] h-[400px] border border-gray-300 border-solid rounded-md flex flex-col justify-start items-center gap-5 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
                className="w-full h-[250px] object-cover rounded-t-md"
                src={img.src}
                alt={img.alt}
            />
            <div className="flex flex-col justify-start items-center gap-2 p-5">
                <h3 className="text-black font-semibold text-xl">{name}</h3>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    GitHub Profile
                </a>
            </div>
        </div>
    );
};

export default GroupMemberCard;
