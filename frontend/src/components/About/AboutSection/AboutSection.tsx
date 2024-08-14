import { Link } from "../../../../node_modules/react-router-dom/dist/index";
import GroupGrid from "../AboutGrid/AboutGrid";

const AboutSection = () => {
  return (
    <section id="about" className="w-full h-full px-5">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Nosso Grupo</h3>
        <p className="text-medium text-xl text-center">Conheça os membros da nossa equipe e seus perfis no GitHub</p>
      </div>

      <GroupGrid />

      <div className="w-full py-5 flex justify-center items-center">
        <Link
          to="/group"
          className="bg-blue-600 hover:bg-blue-700 py-4 px-5 font-bold text-white rounded-md w-[200px] text-center"
        >
          Ver mais
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
