export default function FirstProjects() {
  return (
    <section
      class="md:h-screen95 py-36 h-auto relative flex items-center background-effect overflow-hidden 
      before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:right-36 before:left-0 before:mx-auto before:rounded-full before:bg-emerald-600 sm:before:w-[50rem] before:w-[30rem] sm:before:h-[50rem] before:h-[30rem]">
      <div class="container-fluid"></div>

      <div class="container relative z-1">
        <div class="grid grid-cols-1 mt-5">
          <div class="title-heading">
            <div class="grid md:grid-cols-12 mt-12">
              <div class="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                <div class="rounded-md lg:shadow-md lg:dark:shadow-gray-700 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                  <h5 class="mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white">Je suis un développeur web</h5>

                  <p class="para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0">
                    Mais je souhaite me former à l'UX Design pour parfaire mon expertise.
                  </p>

                  <div class="mt-4">
                    <a
                      href="#portfolio"
                      class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">
                      Plus d'informations
                    </a>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-4 lg:block hidden lg:order-2"></div>

              <div class="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                <h4 class="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">
                  Bastien <br /> C<span class="typewrite" data-period="2000" data-type='[ "hantrel!"]'></span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 bg-gradient-to-b lg:from-emerald-600/5 lg:to-emerald-600/20 from-emerald-600/10 to-emerald-600 lg:-z-2"></div>
      <ul class="circles p-0 mb-0">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
