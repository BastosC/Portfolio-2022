import CardCategory from "@components/CardCategory";

export default function Categories() {
  return (
    <section className="container md:mt-24 mt-16 md:mb-24 mb-16">
      <div className="grid grid-cols-1 items-center mt-8">
        <div className="filters-group-wrap text-center">
          <div className="filters-group">
            <ul className="mb-0 list-none container-filter filter-options">
              <li
                className="inline-block font-medium text-2xl mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 active"
                data-group="all">
                Tous
              </li>
              <li
                className="inline-block font-medium text-2xl mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500"
                data-group="monday">
                Front-end
              </li>
              <li
                className="inline-block font-medium text-2xl mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500"
                data-group="tuesday">
                Back-end
              </li>
              <li
                className="inline-block font-medium text-2xl mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500"
                data-group="wednesday">
                UX Design
              </li>
              <li
                className="inline-block font-medium text-2xl mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500"
                data-group="thursday">
                Gestion de projet
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="grid"
        className="md:flex justify-center mx-auto mt-4 shuffle flex-wrap"
        style={{ position: "relative", overflow: "hidden", height: 442, transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s" }}>
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </section>
  );
}
