import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import { FaStar } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Swiper styles
// @ts-expect-error: Swiper CSS modules have no type declarations
import "swiper/css";
// @ts-expect-error: Swiper CSS modules have no type declarations
import "swiper/css/navigation";
import { ReviewSectionMockData } from "@/lib/HomeMockData";
import {
  CarouelLeftArrowIconSVG,
  CarouelRightArrowIconSVG,
} from "../SVG/HomeLayoutSVG";

const ReviewSection = () => {
  return (
    <CommonContainer id={"testimonial"} className={"w-full"}>
      <CommonTitle title={"Whats our client say"} />

      <div className="flex justify-end gap-3 mb-4 mt-5 sm:mt-8">
        <button
          className="swiper-button-prev-custom 
                     p-1.5 sm:p-3 rounded-full bg-[#EAF0FF] hover:bg-[#D1DFFF] 
                     transition cursor-pointer"
        >
          <CarouelLeftArrowIconSVG />
        </button>

        <button
          className="swiper-button-next-custom 
                     p-1.5 sm:p-3 rounded-full bg-[#EAF0FF] hover:bg-[#D1DFFF] 
                     transition cursor-pointer"
        >
          <CarouelRightArrowIconSVG />
        </button>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        grabCursor
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1.2,
          },
          1280: {
            slidesPerView: 1.5,
          },
          1536: {
            slidesPerView: 1.7,
          },
        }}
        loop={true}
        className="px-4! xl:px-0 w-full"
      >
        {ReviewSectionMockData.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col-reverse xl:flex-row xl:min-h-[500px] xl:max-h-[500px]">
                <div className="w-full xl:w-[60%] p-5 sm:p-6 xl:p-8 rounded-b-3xl  xl:rounded-br-none xl:rounded-l-3xl border border-[#CBCBCB] xl:border-r-0 flex flex-col justify-between gap-2 sm:gap-4 xl:gap-5">
                  <div className="space-y-2 sm:space-y-4 xl:space-y-5">
                    <img
                      className="max-w-[60px] sm:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px]"
                      src={review.userCompanyLogo}
                      alt="Company Logo"
                    />
                    <div className="space-y-1">
                      <p className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                        {review.reviewTitle}
                      </p>
                      <p className="text-[#706B6B] text-sm sm:text-base">
                        {review.userReview}
                      </p>
                    </div>
                  </div>

                  <div className="self-baseline sm:mt-2">
                    <p className="my-1 sm:my-2 flex items-center gap-1">
                      {[...Array(Number(review.rating))].map((_, index) => (
                        <FaStar
                          key={index}
                          size={16}
                          className="text-[#AD46FF]"
                        />
                      ))}
                    </p>
                    <p className="text-lg xl:text-xl font-semibold">
                      {review.userName}
                    </p>

                    <p className="text-[#706B6B] text-sm xl:text-base">
                      {review.userRole}
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-[40%] order-1 xl:order-2">
                  <img
                    className="w-full max-h-[300px] xl:min-h-[500px] object-cover rounded-t-3xl xl:rounded-t-none xl:rounded-r-3xl  object-top"
                    src={review.userAvatar}
                    alt={review.userName}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CommonContainer>
  );
};

export default ReviewSection;

{
  /* <div className="p-8 rounded-2xl bg-[linear-gradient(138deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.03)_50%,rgba(173,70,255,0.06)_100%)] border border-[#9810FA33]">
  <div className="flex items-center gap-2">
    <img
      className="w-16 h-16 rounded-full"
      src={review.userAvatar}
      alt={review.userName}
    />
    <div>
      <p className="text-lg font-medium">{review.userName}</p>
      <div className="flex items-center gap-2">
        <p className="text-sm text-lightText/70">
          {review.userFollowers} followers
        </p>
        <img
          src={review.userCompanyLogo}
          alt="User Company Logo"
          className="w-14"
        />
      </div>
    </div>
  </div>

  <div className="border-b-[0.5px] border-#EFDBFF">
    <p className="mt-4 flex items-center gap-1">
      {[...Array(Number(review.rating))].map((_, index) => (
        <FaStar key={index} size={16} className="text-[#AD46FF]" />
      ))}
    </p>

    <p className="text-[#364153] my-6">"{review.userReview}"</p>
  </div>

  <p className="text-[#9810FA] text-sm mt-2.5">
    {review.removedLeaks} leaks removed · {review.successRate} success rate
  </p>
</div>; */
}
