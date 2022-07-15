import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container text-center">
        <div className="grid grid-cols-1">
          <div className="py-[30px] px-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-left text-center">
                <a href="#" className="text-[22px] focus:outline-none lg:leading-normal leading-normal text-2xl lg:text-3xl font-bold">
                  bastien.chantrel
                </a>
              </div>

              <ul className="list-none footer-list md:text-right text-center mt-6 md:mt-0">
                <li className="inline mr-3">
                  <a href="index.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                    Mes projets
                  </a>
                </li>
                <li className="inline mr-3 mt-[10px]">
                  <a href="parcours.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2">
                    Mon parcours
                  </a>
                </li>
                <li className="inline ">
                  <a
                    href="contact.html"
                    className="btn px-4 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
                    Me contacter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <p className="mb-0">© Bastien Chantrel</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
