/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const BannerSlider = () => {
  const [name, setname] = useState("");

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const menu = [
  

    {
      name: "Men's & Boys' Fashion",
      id: 4,
      dropdown: [
        "Clothing",
        "Shoes",
        "Muslim Wear",
        "Accessories",
        "Watches",
        "Bags",
        "Eyewear",
        "Jewellay",
      ],
    },
    {
      name: "Mother & Baby",
      id: 5,
      dropdown: [
        "Mother & Baby",
        "Feeding",
        "Baby Personal Cares",
        "Baby gear",
        "Nursery",
        "Maternity care",
        "Baby Care & Gifts",
        "Kids Toys",
        "Baby & Toddler Toys",
        "Remote Control",
        "Sports & Outdoor play",
        "Traditional Games",
      ],
    },
    {
      name: "Electronics Devices",
      id: 6,
      dropdown: [
        "SmartPhone",
        "Feature phones",
        "Tablets",
        "Cameras",
        "Trendly Mobile",
        "Projectories",
        "Gaming Console",
      ],
    },
    {
      name: "TV & Home Appliances",
      id: 7,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
    {
      name: "Electronic Accessories",
      id: 8,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
    {
      name: "Groceries",
      id: 9,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
    {
      name: "Home & Lifestyle",
      id: 10,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
    {
      name: "Sports & Outdoors",
      id: 11,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
    {
      name: "Automotive & Motorbike",
      id: 11,
      dropdown: [
        "Traditional Wear",
        "Muslim Wear",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
        "Western Wear",
        "Innerwear",
        "Shoes",
        "Bags",
        "Watches",
      ],
    },
  ];

  let dropdownMenu;
  for (let i = 0; i < menu.length; i++) {
    let element = menu[i];
    if (element.name === name) {
      dropdownMenu = element.dropdown;
      // console.log(dropdownMenu)
    }
  }
// console.log(dropdownMenu)
  // bg-[#f5f5f5]
  return (
    <div className="flex justify-center items-center p-1 lg:p-4">
      <div className="relative w-[240px] py-4 h-[280px] shadow-lg rounded-lg bg-[#eee] mx-2 xl:flex hidden">
        <ul className="w-[100%] text-[#555555]  ">
          {menu.map((item) => {
            return (
              <li
                key={item.id}
                onMouseOver={() => { 
                    setname(item.name);
                }}
                className="listItem py-[3px] w-[240px] px-4 hover:text-[#FF6801]  hover:bg-white"
              >
            {item.name}
                <ul className="shadow-lg rounded-lg bg-[#eee] py-2 z-10 absolute top-4 left-[240px] w-[240px] text-[#555555] dropDown">
                  {dropdownMenu &&
                    dropdownMenu.map((i) => {
                      return (
                        <li
                          key={i}
                          className="py-[3px] w-[240px] px-4  hover:bg-white hover:text-[#FF6801]"
                        >
                          <a href="*">{i}</a>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="xl:w-[50%] rounded-md overflow-hidden w-full lg:mx-2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/e587c6aa-76ec-4ff1-ae01-e9fd99c5568f.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/e587c6aa-76ec-4ff1-ae01-e9fd99c5568f.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/bb26fce0-349b-47aa-ac8b-a48cb3bf9af9.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/28b7fa10-4e59-4c1e-aab1-583f6b0910b4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/7524a22a-7c88-4d71-9261-1c13052b0bd6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/b9ad2c57-7ec0-46e7-b38b-a9390f3b498d.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://icms-image.slatic.net/images/ims-web/b9ad2c57-7ec0-46e7-b38b-a9390f3b498d.jpg"
              alt=""
            />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;
