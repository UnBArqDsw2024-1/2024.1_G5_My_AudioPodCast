import GroupGrid from "../AboutGrid/AboutGrid";

const AboutSection = () => {
  return (
    <section id="about" className="w-full h-full px-5">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
        <h3 className="text-black font-bold text-4xl">Nosso Grupo</h3>
        <p className="text-medium text-xl text-center">Conheça os membros da nossa equipe e seus perfis no GitHub</p>
      </div>

      <GroupGrid />
    </section>
  );
};

export default AboutSection;
