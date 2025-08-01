import { FaLinkedinIn } from "react-icons/fa6";
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";
export default function Footer() {
  return (
    <div className="px-[5%] py-[5%] text-white mt-[3%]  border-t border-[#18181A]">
      <div className="flex flex-col items-start justify-between sm:flex-row">
        <div className="flex flex-col ">
          <h5 className="sm:w-[300px] w-full text-sm  text-white">
            Ravex AI is an ERC-4337 toolkit for RWA and DePIN enhancing
            gasless transactions, social login, multichain support and much
            more, making DeFi accessible and secure
          </h5>

          <h6 className="sm:flex hidden text-xs mt-[2%] text-white/60">
            Copyright © 2025 RAVEX Wallet
          </h6>
        </div>
        <div className="flex flex-col sm:items-end sm:mt-0 mt-[4%]">
          <div className="flex items-center gap-3 mb-3 sm:gap-7 sm:mb-5">
            <a
              href="https://t.me/RAVEX_defi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="sm:w-[40px] w-[30px]"
                src={telegram}
                alt="telegram"
              />
            </a>
            <a
              href="https://x.com/RAVEX_defi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="sm:w-[40px] w-[30px]"
                src={twitter}
                alt="telegram"
              />
            </a>
          </div>

          <h6 className="sm:hidden  flex text-xs mt-[2%] text-white/60">
            Copyright © 2025 RAVEX Wallet
          </h6>
          <div className="flex gap-4 mt-[2%]">
          </div>
        </div>
      </div>
    </div>
  );
}
