/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto  w-full max-w-3xl px-5 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Contact Sales</h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <div className="text-[#647084]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </div>
            </div>
            <div className="mx-auto mb-4 px-0 text-left sm:px-4 md:px-20">
              <form name="wf-form-name" method="get">
                <div className="mb-4 grid w-full grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name-2" className="mb-1 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="m-0 mb-4 block h-9 w-full bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-4"
                      maxLength="256"
                      name="name-2"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="name-3" className="mb-1 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="m-0 mb-4 block h-9 w-full bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-4"
                      maxLength="256"
                      name="name-2"
                      placeholder=""
                      required=""
                    />
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="field" className="mb-1 font-medium">
                    Company Website
                  </label>
                  <input
                    type="text"
                    className="m-0 mb-4 block h-9 w-full bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-4"
                    maxLength="256"
                    name="field"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="field" className="mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    className="m-0 mb-4 block h-9 w-full bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-4"
                    maxLength="256"
                    name="field"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="relative mb-5 md:mb-6 lg:mb-8">
                  <label htmlFor="field" className="mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    placeholder=""
                    maxLength="5000"
                    name="field"
                    className="m-0 mb-2.5 block h-auto min-h-[186px] w-full overflow-auto bg-[#f2f2f7] px-3 py-2 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-4"
                  >
                    {" "}
                  </textarea>
                </div>
                <label className="mb-1 flex items-center justify-start font-medium before:table before:content-['_'] before:[grid-area:1/1/2/2] pb-4">
                  <input
                    type="checkbox"
                    name="checkbox-3"
                    className="m-0 p-0"
                  />
                  <span
                    className="ml-4 inline-block cursor-pointer text-sm"
                    htmlFor="checkbox-3"
                  >
                    I agree with the{" "}
                    <a href="#" className="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
                <a
                  href="#"
                  className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <div className="mr-6 font-bold">Let's Talk</div>
                  <div className="h-4 w-4 flex-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Arrow Right</title>
                      <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                    </svg>
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
