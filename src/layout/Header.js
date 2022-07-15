import IconMail from "+icons/icon-mail.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav id="topnav" className="defaultscroll is-sticky bg-white dark:bg-slate-900 shadow-lg ">
        <div className="container flex items-center py-2">
          <Link href="/">
            <a className="logo">
              <div className="Title">
                <div className="lg:leading-normal leading-normal text-3xl lg:text-4xl font-bold">
                  bastien.chantrel
                  <div className="Title__highlight"></div>
                </div>
                <div className="Title__underline"></div>
                <div aria-hidden className="Title__filled lg:leading-normal leading-normal text-3xl lg:text-4xl font-bold">
                  bastien.chantrel
                </div>
              </div>
            </a>
          </Link>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <div id="navigation" className="flex-1 ">
            <ul className="navigation-menu flex justify-end">
              <li>
                <Link href="/" className=" sub-menu-item">
                  Mon parcours
                </Link>
              </li>
              <li>
                <Link href="/projects" className=" sub-menu-item">
                  Mes projets
                </Link>
              </li>
            </ul>
          </div>

          <div className="buy-button list-none mb-0 ">
            <Link href="/contact">
              <a className="btn flex items-center rounded bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
                <i className="w-4 h-4 mr-2 flex justify-center items-center">
                  <IconMail />
                </i>
                <span className="leading-tight mb-1"> Me contacter</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="py-12"></div>
    </>
  );
}
