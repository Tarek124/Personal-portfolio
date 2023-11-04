/* eslint-disable react/prop-types */
const DeleveryLocation = ({ open, close }) => {
  if (!open) return null;
  return (
    <section className="overlay" onClick={close}>
      <div onClick={(e)=>{
        e.stopPropagation()
      }} className="modalContainer bg-[#000000de] flex items-center flex-col w-[95%] sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[50%] rounded overflow-auto h-[90%] md:h-auto">
        <div className="w-full flex justify-between px-4 py-4">
          <h1 className="text-[#ebebeb]">Add New Delivery Address</h1>
          <p
            onClick={close}
            className="text-[#c5c5c5] px-2 hover:text-[#afafaf] cursor-pointer"
          >
            Back
          </p>
        </div>

        <form className=" w-full p-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input Full Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Moblie Number
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input Mobile Number"
                required
              />
            </div>
            <div className="text-white">
              Province
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="someOption">Select</option>
                <option value="someOption">Barishal</option>
                <option value="otherOption">Chattogram</option>
                <option value="someOption">Dhaka</option>
                <option value="otherOption">Khulna</option>{" "}
                <option value="someOption">Mymensingh</option>
                <option value="otherOption">Rsjshahi</option>
                <option value="someOption">Rangpur</option>
                <option value="otherOption">Sylhet</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="House no. / building / street / area"
                required
              />
            </div>
            <div className="text-white">
              City
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="someOption">Select</option>
                <option value="someOption">Barishal</option>
                <option value="otherOption">Chattogram</option>
                <option value="someOption">Dhaka</option>
                <option value="otherOption">Khulna</option>{" "}
                <option value="someOption">Mymensingh</option>
                <option value="otherOption">Rsjshahi</option>
                <option value="someOption">Rangpur</option>
                <option value="otherOption">Sylhet</option>
              </select>
            </div>
            <div className="text-white">
              Select a label for effective delivery:
              <div className="flex">
                <button className="w-[45%] mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Home
                </button>
                <button className="w-[45%] ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Office
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default DeleveryLocation;
