import IconReact from "+icons/icon-react.svg";
import IconGithub from "+icons/icon-github.svg";
import IconLink from "+icons/icon-link.svg";
import Image from "next/image";
import ImagePrimary from "+projects/cortex-main.jpg";
export default function CardProject() {
  return (
    <div className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
      <div className="relative">
        <div className="img-container">
          <Image src={ImagePrimary} width={300} height={200} objectFit="cover" />
        </div>
        <div className="absolute top-6 right-6">
          <a href className="btn btn-icon text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-700 rounded-full hover:bg-emerald-600 ">
            <IconGithub className="uil uil-github w-6  text-emerald-600 hover:text-white" />
          </a>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="py-4">
          <a href="property-detail.html" className="text-lg hover:text-emerald-600 font-medium ease-in-out duration-500">
            Cortex - Vulgarisation scientifique
          </a>
        </div>
        <div className="flex flex-col  pb-4 border-b">
          <div className="flex flex-wrap">
            <span className="bg-emerald-600/5 text-emerald-600 hover:text-white hover:bg-emerald-600 dark:bg-emerald-400/10 hover:dark:bg-emerald-600  duration-500  text-sm font-bold px-2.5 py-0.5 rounded ">
              Projet
            </span>
          </div>
          <a
            href
            className="btn ml-auto flex items-center btn-link text-md text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">
            <IconLink className="uil uil-link text-emerald-600 w-4 mr-1" />
            <span className="mb-1">Lien démo</span>
          </a>
        </div>
        <ul className="pt-4  dark:border-gray-800 flex items-center list-none">
          <li className="flex items-center mr-4">
            <div className="flex items-center justify-center h-12 w-12 shadow-md hover:bg-emerald-600 hover:dark:bg-emerald-600 duration-500 dark:shadow-gray-700 rounded-md p-1 bg-white dark:bg-slate-600">
              <IconReact />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
