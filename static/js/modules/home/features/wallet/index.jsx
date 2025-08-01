import React from "react";
import Marquee from "react-fast-marquee";
import one from "../../assets/1-01.png";
import two from "../../assets/3-01.png";
import three from "../../assets/4-01.png";
import four from "../../assets/5-01.png";
import five from "../../assets/6-01.png";
import six from "../../assets/7-01.png";
import seven from "../../assets/8-01.png";
import eight from "../../assets/9-01.png";
import nine from "../../assets/10-01.png";
import ten from "../../assets/11-01.png";
import ten01 from "../../assets/12-01.png";

export default function Wallet() {
  return (
    <div className="text-center text-white mt-[10%] px-[5%] relative">
      <div className="flex flex-col justify-center items-center">
        {" "}
        <h2 className="font-black sm:text-[40px] text-[30px] sm:px-[20%] px-[5%] leading-[40px] sm:leading-[50px]">
          Supports all EVM Chains
        </h2>
        <p className="sm:w-[600px] sm:text-base text-sm w-full text-white/60">
          RAVEX is going to support all major and even non-mainstream EVM
          Chains to allow total connectivity.
        </p>
      </div>
      <div className="px-[5%]">
        <div className="">
          <Marquee className="mq flex " direction="right" speed={60}>
            <div className="image_wrapper flex flex-col">
              <img src={one} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={two} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={three} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={four} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={five} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={six} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={seven} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={eight} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={nine} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={ten} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={ten01} alt="" />
            </div>
          </Marquee>
        </div>
        <div className="mt-[-50px]">
          <Marquee className="mq" direction="left" speed={60}>
            <div className="image_wrapper flex flex-col">
              <img src={one} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={two} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={three} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={four} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={five} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={six} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={seven} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={eight} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={nine} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={ten} alt="" />
            </div>
            <div className="image_wrapper flex flex-col">
              <img src={ten01} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
