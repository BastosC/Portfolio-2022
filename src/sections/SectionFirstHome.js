import ImageJob from "+images/job.jpg";
import ImageShape from "+images/curve-shape.png";

export default function FirstHome() {
  return (
    <section
      className="h-screen95 py-36 relative flex items-center background-effect overflow-hidden "
      style={{ backgroundImage: `url(${ImageJob})` }}>
      <div className="container-fluid">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${ImageShape})` }}></div>
      </div>

      <div className="container z-1">
        <div className="grid grid-cols-1 mt-10">
          <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">
            Bastien Chantrel
            <br />
            <span className="text-emerald-600">Développeur front-end</span>
          </h4>
          <p className="text-slate-400 text-lg max-w-xl">
            Bienvenue sur mon portfolio, vous pourez retrouver ici tout mes projets public ainsi que le détail de mon parcours professionnel.
          </p>

          <div className="mt-6">
            <p className="text-slate-400 flex items-center">
              <span className="text-dark mr-2 dark:text-slate-300">Actuellement :</span>
              Apprenti chez{" "}
              <a
                href="https://www.kienso.fr/"
                target="_blank"
                rel="noopenner noreferrer"
                className="btn  ml-1 btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">
                Agence web & mobile Emendo
              </a>
              ,
            </p>
            <p className="text-slate-400 ">en recherche d'une formation UX Design en alternance de 12 mois.</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-emerald-600/5"></div>
      <ul className="circles p-0 mb-0">
        {/* <li className="brand-img">@@include("../../icons/icon-tailwind.html")</li>
        <li className="brand-img">@@include("../../icons/icon-three.html")</li>
        <li className="brand-img">@@include("../../icons/icon-next.html")</li>
        <li className="brand-img">@@include("../../icons/icon-react.html")</li>
        <li className="brand-img">@@include("../../icons/icon-wordpress.html")</li>
        <li className="brand-img">@@include("../../icons/icon-adobe-xd.html")</li> */}
      </ul>
    </section>
  );
}
