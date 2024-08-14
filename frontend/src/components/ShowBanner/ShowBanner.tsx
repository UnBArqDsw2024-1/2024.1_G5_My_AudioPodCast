const ShowBanner = () => {
  const ShowBannerData = {
    capaImg: "https://mundopodcast.com.br/wp-content/uploads/2021/03/casos.jpg",
    title: "Casos e Causos",
    description: "O Causos e Causas é uma crí­tica a verdade absoluta, a crí­tica se esgueira entrelinhas, escorre na sutileza das histórias em um belo mosaico em áudio. Histórias baseadas em fatos (nem sempre) reais."
  }
  return (
    <section id="ShowBanner" className="hidden md:flex justify-center w-full h-full min-h-128 relative bg-[url('https://mundopodcast.com.br/wp-content/uploads/2018/03/show-bb.jpg')]">
      <div className="relative w-full h-full flex py-24 flex justify-center gap-24 max-w-screen-xl">
        <img src={ShowBannerData.capaImg} className="relative w-96 h-96" alt="capa" />
        <div className="z-10 inset-0 flex flex-col justify-center items-start text-center gap-3">
          <h1 className="text-white text-4xl md:text-5xl font-bold">{ShowBannerData.title}</h1>
          <p className="text-white text-start text-md md:text-lg font-medium">
            {ShowBannerData.description}</p>
          <button className="border-white border-2 py-3 px-4 md:py-4 md:px-5 font-bold text-white rounded-md">
            Se inscrever
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowBanner;
