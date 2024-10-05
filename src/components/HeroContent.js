const HeroContent = () => {
  return (
    <section className="hero max-w-full py-14 lg:px-8 px-4 hero-bg">
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex flex-col gap-16 ">
          <div className="flex flex-col justify-start lg:gap-10 gap-4">
            <h3 className="lg:text-xl md:text-lg text-[15px] text-[#E75A7C] text-base items-center ">
              Transformez votre vision en réalité numérique !
            </h3>
            <h1 className="lg:text-[68px] md:text-[50px] text-[25px] font-semibold text-indigo-950 leading-tight lg:text-start text-center ">
              L’agence digital dédié aux entreprises
            </h1>
            <div className="flex flex-col  lg:hidden max-sm:block">
              <img
                src="/images/Happy-Man.png"
                alt="Happy man representing satisfaction with the service"
                className="max-w-full h-auto object-contain w-[856px]"
              />
              <img
                src="/images/Rectangle 17.png"
                alt="Rectangle representing a product"
                className="max-w-full h-auto object-contain w-[567px] relative -mt-40" // Menggunakan margin negatif
              />
            </div>
            <p className=" text-lg max-sm:text-sm  lg:text-gray-500 mb-2 lg:block max-sm:hidden">
              AGENCIFY est une agence française spécialisée dans le
              Développement Web,
              <br className="lg:block hidden" />
              qui identifie vos besoins pour vous accompagner dans la création
              <br className="lg:block hidden" />
              de votre site sur-mesure et dans vos projets digitaux.
            </p>
          </div>
          <div className="flex lg:flex-row max-md:flex-col max-sm:flex-col sm:w-full items-center gap-7 max-sm:relative max-sm:-mt-20">
            <a
              href="#home"
              className="bg-[#E75A7C] text-white lg:text-base w-[280px] text-center  font-normal lg:px-3 px-4 py-3 rounded-full hover:bg-red-600 transition duration-300"
            >
              Recevoir nos offres
            </a>
            <a
              href="#home"
              className="border border-[#E75A7C] text-indigo-950 hover:text-white lg:text-base w-[280px] text-center font-normal lg:px-6 px-4 py-3 rounded-full hover:bg-red-600 transition duration-300"
            >
              Prendre un rendez-vous
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:block max-sm:hidden">
          <img
            src="/images/Happy-Man.png"
            alt="Happy man representing satisfaction with the service"
            className="max-w-full h-auto object-contain w-[856px]"
          />
          <img
            src="/images/Rectangle 17.png"
            alt="Rectangle representing a product"
            className="max-w-full h-auto object-contain w-[567px] relative -mt-40" // Menggunakan margin negatif
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
