const HeroContent = () => {
  return (
    <section className="hero max-w-full py-12 lg:px-16 px-2 hero-bg">
      <div className="flex lg:flex-row flex-col justify-center items-start">
        <div className="flex flex-col gap-14 lg:py-20 ">
          <div className="flex flex-col justify-start lg:gap-7 gap-4">
            <h2 className="lg:text-lg md:text-lg text-[15px] text-[#E75A7C] text-base max-sm:text-center items-center ">
              Transformez votre vision en réalité numérique!
            </h2>
            <h1 className="lg:text-[60px] md:text-[45px] text-[25px] font-semibold text-indigo-950 leading-tight lg:text-start text-center ">
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
            <p className=" text-base max-sm:text-sm  lg:text-gray-500 mb-2 lg:block max-sm:hidden">
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
        <div className="lg:relative flex flex-col lg:block max-sm:hidden right-10 items-start border">
          <img
            src="/images/Happy-Man.png"
            alt="Happy man representing satisfaction with the service"
            className="max-w-full h-auto object-contain w-[956px]"
          />
          <img
            src="/images/Rectangle 17.png"
            alt="Rectangle representing a product"
            className="max-w-full h-auto object-contain w-[567px] relative -mt-40" // Menggunakan margin negatif
          />
        </div>{" "}
        <div className="absolute bottom-[130px] right-12  left-auto mx-auto w-[300px] bg-white p-4 rounded-lg shadow-lg lg:block hidden">
          <div className="testimonial-tail "></div>
          <p className="text-gray-500 mb-2 text-sm">
            "Une expérience parfaite pour obtenir mon site internet ! Le
            processus a été rapide et efficace."
          </p>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-pink-500 w-[50px]">★★★★★</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/images/Ellipse.png" // Ganti path gambar testimonial
              alt="Thibault Ernout"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-900 font-semibold text-sm">
                Thibault Ernout
              </p>
              <p className="text-gray-400 text-xs">Client du 9 Juin 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
