import CardCategory from "@components/CardCategory";
import CardProject from "@components/CardProject";
import IconReact from "+icons/icon-react.svg";

export default function Projects() {
  return (
    <section className="relative md:py-16 py-12 bg-gray-50 dark:bg-emerald-600/5">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Tous mes projets</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-700 rounded p-3 mb-12">
              <form action="#">
                <div className="registration-form text-dark text-start">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                    <div className="filter-search-form relative filter-border">
                      <i className="uil uil-search icons" />
                      <input
                        name="name"
                        type="text"
                        id="job-keyword"
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        placeholder="Titre, description ..."
                      />
                    </div>
                    <div className="filter-search-form relative filter-border">
                      <i className="uil uil-code-branch icons" />
                      <select className="form-select" data-trigger name="choices-location" id="choices-location">
                        <option value>Technologie</option>
                        <option value="AF">Tailwind css </option>
                        <option value="AF">Scss </option>
                        <option value="AF">React.js </option>
                        <option value="AF">Wordpress </option>
                        <option value="AF">Three.js </option>
                        <option value="AF">Adobe Xd </option>
                        <option value="AF">Next.js</option>
                      </select>
                    </div>
                    <div className="filter-search-form relative filter-border">
                      <i className="uil uil-briefcase-alt icons" />
                      <select className="form-select " data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                        <option value>Caractéristiques</option>
                        <option value={1}>En production</option>
                        <option value={1}>Essai</option>
                      </select>
                    </div>
                    <input
                      type="submit"
                      id="search"
                      name="search"
                      style={{ height: 60 }}
                      className="btn rounded cursor-pointer bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                      defaultValue="Rechercher"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[30px] cursor-pointer">
          <CardProject />
        </div>
      </div>
    </section>
  );
}
