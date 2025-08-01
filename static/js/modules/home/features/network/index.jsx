import Marquee from "react-fast-marquee";
import aethir from "../../assets/aethir.png";
import akash from "../../assets/Akash Network.png";
import one from "../../assets/Asset 4.png";
import two from "../../assets/Asset 5.png";
import three from "../../assets/Asset 6.png";
import four from "../../assets/Asset 7.png";
import filecoin from "../../assets/filecoin.png";

export default function Network() {
  return (
    <div>
      <div className="sm:flex   mt-[2%] justify-center items-center flex-col pt-[3%] px-[5%]">
        <h5 className="text-white/50 text-center sm:text-base text-sm">
          Powering the next generation of builders
        </h5>
        <div className="flex sm:flex-row flex-col gap-3 items-center sm:mt-[-10px] sm:mb-[40px]">
          <Marquee className="mq" direction="left" speed={60}>
            <img className="w-[100px] mr-5 select-none" src={three} alt="aws" />
            <img
              className="w-[100px] mr-5 select-none"
              src={two}
              alt="nvidia"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={four}
              alt="google"
            />
            <img
              className="w-[150px] mr-5 select-none"
              src={one}
              alt="microsoft"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={aethir}
              alt="aethir"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={akash}
              alt="akash"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={filecoin}
              alt="filecoin"
            />

            <img className="w-[100px] mr-5 select-none" src={three} alt="aws" />
            <img
              className="w-[100px] mr-5 select-none"
              src={two}
              alt="nvidia"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={four}
              alt="google"
            />
            <img
              className="w-[150px] mr-5 select-none"
              src={one}
              alt="microsoft"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={aethir}
              alt="aethir"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={akash}
              alt="akash"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={filecoin}
              alt="filecoin"
            />

            <img className="w-[100px] mr-5 select-none" src={three} alt="aws" />
            <img
              className="w-[100px] mr-5 select-none"
              src={two}
              alt="nvidia"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={four}
              alt="google"
            />
            <img
              className="w-[150px] mr-5 select-none"
              src={one}
              alt="microsoft"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={aethir}
              alt="aethir"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={akash}
              alt="akash"
            />
            <img
              className="w-[100px] mr-5 select-none"
              src={filecoin}
              alt="filecoin"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
