import IconTailwind from "+icons/icon-tailwind.svg";

export default function CardCategory() {
  return (
    <div className="lg:w-1/6 md:w-1/4 w-1/2 picture-item p-4 shuffle-item shuffle-item--visible">
      <div className="text-center p-6 shadow dark:shadow-gray-700 rounded-md">
        <div className="h-full w-full p-4 flex items-center justify-center">
          <IconTailwind />
        </div>
        <div className="content ">
          <h5 className="font-semibold text-lg">Tailwind</h5>
          <small className="text-slate-400 mb-0">3 Projets</small>
        </div>
      </div>
    </div>
  );
}
