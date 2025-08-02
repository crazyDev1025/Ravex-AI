import React from "react";
import dashboard from "../../assets/dashboard.webp";

export default function Portfolio() {
  return (
    <div className="px-[5%] sm:my-[10%] my-[5%] " id="pricing">
      <div className="w-full h-[50%] bg-[#1E1D1E] sm:py-[4%] py-[6%]  rounded-[16px]">
        <div className="px-[6%] flex justify-center items-center flex-col">
          <h2 className="sm:text-[32px]  text-[30px] font-semibold text-white sm:leading-[40px] leading-[30px] text-center mb-[1.5%] ">
            Track Your Portfolio in Excruciating Detail.
          </h2>
          <p className="sm:w-[700px] sm:text-lg text-sm text-white text-center sm:text-white/60 sm:my-0 my-[4%]">
            $RAVEX empowers users to earn passive income through protocol incentives while actively contributing to the network’s security and governance. The staking process is simple, non-custodial, and designed to give users full control over their assets.

With its secure cross-chain bridge, RAVEX enables fast, low-cost transactions and seamless interoperability across ecosystems. Built with a security-first approach and backed by audited smart contracts, RAVEX ensures trustless, efficient movement of assets across chains.
          </p>
        </div>
        <div className="flex justify-center mt-[2%]  px-[6%]">
          <img
            src={dashboard}
            className="sm:h-[600px]   border border-red-500 rounded-[25px]"
            alt="dashboard"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
