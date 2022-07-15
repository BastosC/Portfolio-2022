export default function ProjectBody() {
  return (
    <div className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <section className="lg:col-span-8 md:col-span-6">
            <div className="p-6 rounded-md shadow dark:shadow-gray-700">
              {/* <img src="assets/images/blog/slide02.jpg" className="rounded-md" alt /> */}
              <div className="mt-6">
                <p className="text-slate-400">
                  The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed
                  in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient
                  dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.
                </p>
                <p className="text-slate-400 italic border-x-4 border-emerald-600 rounded-tl-xl rounded-br-xl mt-3 p-3">
                  " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even slightly believable. "
                </p>
                <p className="text-slate-400 mt-3">
                  The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to
                  itself or distract the viewer's attention from the layout.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-md shadow dark:shadow-gray-700 mt-8">
              <h5 className="text-lg font-semibold">Comments:</h5>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <img src="assets/images/client/01.jpg" className="h-11 w-11 rounded-full shadow" alt /> */}
                    <div className="ml-3 flex-1">
                      <a href className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500 ease-in-out">
                        Calvin Carlo
                      </a>
                      <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                    </div>
                  </div>
                  <a href className="text-slate-400 hover:text-emerald-600 transition-all duration-500 ease-in-out ml-5">
                    <i className="mdi mdi-reply" /> Reply
                  </a>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 mt-6">
                  <p className="text-slate-400 italic">
                    " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour "
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <img src="assets/images/client/02.jpg" className="h-11 w-11 rounded-full shadow" alt /> */}
                    <div className="ml-3 flex-1">
                      <a href className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500 ease-in-out">
                        Calvin Carlo
                      </a>
                      <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                    </div>
                  </div>
                  <a href className="text-slate-400 hover:text-emerald-600 transition-all duration-500 ease-in-out ml-5">
                    <i className="mdi mdi-reply" /> Reply
                  </a>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 mt-6">
                  <p className="text-slate-400 italic">
                    " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour "
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <img src="assets/images/client/03.jpg" className="h-11 w-11 rounded-full shadow" alt /> */}
                    <div className="ml-3 flex-1">
                      <a href className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500 ease-in-out">
                        Calvin Carlo
                      </a>
                      <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                    </div>
                  </div>
                  <a href className="text-slate-400 hover:text-emerald-600 transition-all duration-500 ease-in-out ml-5">
                    <i className="mdi mdi-reply" /> Reply
                  </a>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 mt-6">
                  <p className="text-slate-400 italic">
                    " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour "
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <img src="assets/images/client/04.jpg" className="h-11 w-11 rounded-full shadow" alt /> */}
                    <div className="ml-3 flex-1">
                      <a href className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500 ease-in-out">
                        Calvin Carlo
                      </a>
                      <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                    </div>
                  </div>
                  <a href className="text-slate-400 hover:text-emerald-600 transition-all duration-500 ease-in-out ml-5">
                    <i className="mdi mdi-reply" /> Reply
                  </a>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 mt-6">
                  <p className="text-slate-400 italic">
                    " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour "
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-md shadow dark:shadow-gray-700 mt-8">
              <h5 className="text-lg font-semibold">Leave A Comment:</h5>
              <form className="mt-8">
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5">
                    <div className="text-left">
                      <label htmlFor="name" className="font-semibold">
                        Your Name:
                      </label>
                      <div className="form-icon relative mt-2">
                        <i data-feather="user" className="w-4 h-4 absolute top-3 left-4" />
                        <input name="name" id="name" type="text" className="form-input pl-11" placeholder="Name :" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-6 mb-5">
                    <div className="text-left">
                      <label htmlFor="email" className="font-semibold">
                        Your Email:
                      </label>
                      <div className="form-icon relative mt-2">
                        <i data-feather="mail" className="w-4 h-4 absolute top-3 left-4" />
                        <input name="email" id="email" type="email" className="form-input pl-11" placeholder="Email :" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <div className="text-left">
                      <label htmlFor="comments" className="font-semibold">
                        Your Comment:
                      </label>
                      <div className="form-icon relative mt-2">
                        <i data-feather="message-circle" className="w-4 h-4 absolute top-3 left-4" />
                        <textarea name="comments" id="comments" className="form-input pl-11 h-28" placeholder="Message :" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full">
                  Send Message
                </button>
              </form>
            </div>
          </section>
          <section className="lg:col-span-4 md:col-span-6">
            <div className="sticky top-20">
              <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center">Author</h5>
              <div className="text-center mt-8">
                {/* <img src="assets/images/client/05.jpg" className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt /> */}
                <a href className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500 ease-in-out">
                  Cristina Romsey
                </a>
                <p className="text-slate-400">Content Writer</p>
              </div>
              <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-8">
                Recent post
              </h5>
              <div className="flex items-center mt-8">
                {/* <img src="assets/images/blog/06.jpg" className="h-16 rounded-md shadow dark:shadow-gray-700" alt /> */}
                <div className="ml-3">
                  <a href className="font-semibold hover:text-emerald-600">
                    Consultant Business
                  </a>
                  <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {/* <img src="assets/images/blog/07.jpg" className="h-16 rounded-md shadow dark:shadow-gray-700" alt /> */}
                <div className="ml-3">
                  <a href className="font-semibold hover:text-emerald-600">
                    Grow Your Business
                  </a>
                  <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {/* <img src="assets/images/blog/08.jpg" className="h-16 rounded-md shadow dark:shadow-gray-700" alt /> */}
                <div className="ml-3">
                  <a href className="font-semibold hover:text-emerald-600">
                    Look On The Glorious Balance
                  </a>
                  <p className="text-sm text-slate-400">1st May 2022</p>
                </div>
              </div>
              <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-8">
                Social sites
              </h5>
              <ul className="list-none text-center mt-8">
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="facebook" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="instagram" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="twitter" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="linkedin" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="github" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="youtube" className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href
                    className="btn btn-icon btn-sm border dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600">
                    <i data-feather="gitlab" className="h-4 w-4" />
                  </a>
                </li>
              </ul>
              <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-8">
                Tagscloud
              </h5>
              <ul className="list-none text-center mt-8">
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Business
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Finance
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Marketing
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Fashion
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Bride
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Lifestyle
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Travel
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Beauty
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Video
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a
                    href
                    className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                    Audio
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
