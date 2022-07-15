export default function Skills() {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="lg:ml-8">
            <img src="assets/images/illustrator/SEO_SVG.svg" alt />
          </div>
        </div>
        <div className="md:col-span-6 mt-8 md:mt-0 order2 md:order-1">
          <div className="lg:ml-5">
            <h6 className="text-emerald-600 text-sm font-bold uppercase mb-2">Développeur Web / UX Designer</h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Mon Profil</h3>
            <p className="text-slate-400 max-w-xl">
              You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the
              Website.
            </p>
            <ul className="list-none text-slate-400 my-6">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-emerald-600 text-xl mr-2" />
                Digital Marketing Solutions for Tomorrow
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-emerald-600 text-xl mr-2" /> Our Talented &amp; Experienced Marketing Agency
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-emerald-600 text-xl mr-2" />
                Create your own skin to match your brand
              </li>
            </ul>
            <a
              href
              className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full">
              Voir ce que je suis capable de faire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
