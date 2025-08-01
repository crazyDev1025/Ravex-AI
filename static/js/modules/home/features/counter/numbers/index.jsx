import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Numbers() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className=" mt-[2%]  sm:px-[10%]  ">
        <div className="grid grid-cols-2   items-center">
          <div className="col-span-1 flex flex-col items-center ">
            <h1 className="text-white sm:text-[70px] font-semibold text-[40px]">
              {counterOn && (
                <CountUp start={0} end={50} duration={2} delay={0} />
              )}
              M
            </h1>
            <h5 className="text-white sm:text-base text-sm">
              UserOps
            </h5>
          </div>
          <div className="col-span-1 flex  flex-col items-center">
            <h1 className="text-white sm:text-[70px] font-semibold text-[40px]">
              {counterOn && (
                <CountUp start={0} end={1} duration={2} delay={0} />
              )}
              .2M
            </h1>
            <h5 className="text-white sm:text-base text-sm">Smart Accounts</h5>
          </div>
          <div className="mt-5 col-span-1 flex flex-col items-center">
            {" "}
            <h1 className="text-white sm:text-[70px] font-semibold text-[40px]">
              {counterOn && (
                <CountUp start={0} end={2} duration={2} delay={0} />
              )}
              +
            </h1>
            <h5 className="text-white sm:text-base text-center text-sm">
             Users Onboarded
            </h5>
          </div>
          <div className="mt-5 col-span-1 flex flex-col items-center">
            <h1 className="text-white sm:text-[70px] font-semibold text-[40px]">
              {counterOn && (
                <CountUp start={0} end={12} duration={2} delay={0} />
              )}
              +
            </h1>
            <h5 className="text-white sm:text-base text-sm">Volume</h5>
          </div>
        </div>
      </div>
     
    </ScrollTrigger>
  );
}
