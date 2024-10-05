const TestiCard = () => {
  return (
    <section className="relative w-full max-w-screen-xl mx-auto flex justify-between items-center">
      {/* Left Side: Text Content */}
      <div className="flex flex-col gap-4">
        <h3 className="lg:text-xl md:text-lg text-[15px] text-[#E75A7C]">
          Transformez votre vision en réalité numérique !
        </h3>
        <h1 className="lg:text-[66px] md:text-[50px] text-[25px] font-semibold text-indigo-950 leading-tight lg:text-start">
          L’agence digital dédié aux entreprises
        </h1>
        <p className="text-lg text-gray-500">
          AGENCIFY est une agence française spécialisée dans le Développement
          Web, qui identifie vos besoins pour vous accompagner dans la création
          de votre site sur-mesure et dans vos projets digitaux.
        </p>
        <div className="flex gap-4">
          <a
            href="#home"
            className="bg-[#E75A7C] text-white text-base px-4 py-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            Recevoir nos offres
          </a>
          <a
            href="#home"
            className="border border-[#E75A7C] text-indigo-950 hover:text-white text-base px-4 py-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            Prendre un rendez-vous
          </a>
        </div>
      </div>

      {/* Right Side: Image and Testimonial */}
      <div className="relative">
        {/* Image */}
        <img
          src="/images/Happy-Man.png" // Ganti path gambarnya
          alt="Happy man representing satisfaction with the service"
          className="max-w-full h-auto object-contain w-[400px]"
        />

        {/* Testimonial Card */}
        <div className="absolute bottom-0 right-0 transform translate-x-10 translate-y-10 bg-white p-4 rounded-lg shadow-lg w-[300px]">
          <p className="text-gray-500 mb-4">
            "Une expérience parfaite pour obtenir mon site internet ! Le
            processus a été rapide et efficace."
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/user-photo.jpg" // Ganti path gambar testimonial user
              alt="Thibault Ernout"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-900 font-semibold">Thibault Ernout</p>
              <p className="text-gray-400 text-sm">Client du 9 Juin 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <span className="text-pink-500">★★★★★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiCard;
