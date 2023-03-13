import { render } from '@testing-library/react';
import React from 'react';
import LightEther from '../assets/images/ethereum-original.svg';
import DarkEther from '../assets/images/ethereum-original-light.svg';
import LightMap from '../assets/images/light-map.png';
import DarkMap from '../assets/images/dark-map.png';

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#f8f9fa] dark:bg-dLightBg">
      {/* footer top */}
      <div className="container lg:mx-auto">
        <div className="py-6 border-b border-border dark:border-dBorder">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <a
                href="#!"
                className="py-1.5 px-2.5 rounded-full bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:text-[#000] dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="twitter"
                data-tooltip-placement="top"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <div
                id="twitter"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                Twitter
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a
                href="#!"
                className="py-1.5 px-2.5 rounded-full bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:text-[#000] dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="medium"
                data-tooltip-placement="top"
              >
                <i className="fa fa-medium"></i>
              </a>
              <div
                id="medium"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                Medium
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a
                href="#!"
                className="py-1.5 px-3 rounded-full bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:text-[#000] dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="facebook"
                data-tooltip-placement="top"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <div
                id="facebook"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                Facebook
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a
                href="#!"
                className="py-1.5 px-2.5 rounded-full bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:text-[#000] dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="reddit"
                data-tooltip-placement="top"
              >
                <i className="fa fa-reddit-alien"></i>
              </a>
              <div
                id="reddit"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                Reddit
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="flex item-center">
              <p className="text-primary hover:text-link text-sm dark:text-dHeading dark:hover:text-link">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
                <a href="#!" className="ml-2" onClick={toTop}>
                  Back to Top
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer mid */}
      <div className="container mx-auto lg:py-10">
        <div className="grid sm:grid-2 lg:grid-cols-3">
          <div className="pt-6 mb-4 lg:pt-0 lg:mb-0">
            <div className="flex align-items-center mb-3">
              <img src={LightEther} width={20} className="block dark:hidden" />
              <img src={DarkEther} width={20} className="hidden dark:block" />
              <p className="text-xl ml-2 dark:text-dHeading">
                Powered by Ethereum
              </p>
            </div>
            <div>
              <p className="text-xs sm:mb-4 lg:mb-0 dark:text-dHeading">
                Etherscan is a Block Explorer and Analytics Platform for
                Ethereum, a decentralized smart contracts platform.
              </p>
            </div>
            <div className="hidden lg:block">
              <img src={LightMap} width={280} className="block dark:hidden" />
              <img src={DarkMap} width={280} className="hidden dark:block" />
            </div>
          </div>
          <div className="lg:col-span-2 ">
            <div className="grid grid-cols-2 sm:grid-cols-3">
              <div className="mb-6 lg:px-3">
                <p className="text-primary text-base mb-3 font-medium dark:text-dHeading">
                  Company
                </p>
                <div className="flex flex-col">
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    About Us
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Brand Assets
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Careers
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Terms of Service
                    <span className="bg-link  text-[11px] text-[#fff] small fw-medium text-nowrap rounded-full p-1 px-2 ml-2">
                      We're Hiring!
                    </span>
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Bug Bounty
                  </a>
                </div>
              </div>
              <div className="mb-6 lg:px-3">
                <p className="text-primary text-base mb-3 font-medium dark:text-dHeading">
                  Community
                </p>
                <div className="flex flex-col">
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    API Documentation
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Knowledge Base
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Network Status
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Newsletters
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Disqus Comments
                  </a>
                </div>
              </div>
              <div className="mb-5 lg:px-3">
                <p className="text-primary text-base mb-3 font-medium dark:text-dHeading">
                  Products & Services
                </p>
                <div className="flex flex-col">
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Advertise
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Explorer-as-a-Service (EaaS)
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    API Plans
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Priority Support
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Blockscan
                    <i className="fa fa-external-link ml-1 text-secondary dark:text-dSecondary"></i>
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Blockscan Chat
                    <i className="fa fa-external-link ml-1 text-secondary dark:text-dSecondary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto">
        <div className="py-4 border-t border-border dark:border-dBorder">
          <div className="sm:flex justify-between">
            <div className="flex mb-2 sm:mb-0">
              <p className="text-primary text-xs dark:text-dHeading">
                Etherscan © 2023 (F1)
              </p>
            </div>
            <div className="flex item-center">
              <p className="text-primary text-xs dark:text-dHeading">
                Donations:
                <a href="#!" className=" text-link hover:text-link_hover">
                  {' '}
                  0x71c765...d8976f
                </a>
                <i
                  className="fa fa-heart text-[#de4437] ml-2"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
