import React, { useState } from 'react';
import LightEther from '../assets/images/ethereum-original.svg';
import DarkEther from '../assets/images/ethereum-original-light.svg';
import LightMap from '../assets/images/light-map.png';
import DarkMap from '../assets/images/dark-map.png';
import LightArrow from '../assets/images/light-arrow.png';
import LightArrowHover from '../assets/images/light-arrow-hover.png';
import DarkArrow from '../assets/images/dark-arrow.png';
import DarkArrowHover from '../assets/images/dark-arrow-hover.png';
import LightTwitter from '../assets/images/light-twitter.png';
import LightMedium from '../assets/images/light-medium.png';
import LightFacebook from '../assets/images/light-facebook.png';
import LightReddit from '../assets/images/light-reddit.png';
import LightTwitterHover from '../assets/images/light-twitter-hover.png';
import LightMediumHover from '../assets/images/light-medium-hover.png';
import LightFacebookHover from '../assets/images/light-facebook-hover.png';
import LightRedditHover from '../assets/images/light-reddit-hover.png';
import DarkTwitter from '../assets/images/dark-twitter.png';
import DarkMedium from '../assets/images/dark-medium.png';
import DarkFacebook from '../assets/images/dark-facebook.png';
import DarkReddit from '../assets/images/dark-reddit.png';

const Footer = () => {
  const [isHovering, setIsHovering] = useState('');
  // console.log(isHovering);
  // const handleMouseOver = () => {
  //   setIsHovering();
  // };

  // const handleMouseOut = () => {
  //   setIsHovering();
  // };
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
                onMouseOver={() => setIsHovering('twitter')}
                onMouseOut={() => setIsHovering('')}
                className="w-8 h-8 rounded-full justify-center items-center flex hover:bg-[#dee2e6] bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="twitter"
                data-tooltip-placement="top"
              >
                <img
                  src={
                    isHovering == 'twitter' ? LightTwitterHover : LightTwitter
                  }
                  width={13}
                  className="block dark:hidden"
                />
                <img
                  src={
                    isHovering == 'twitter' ? LightTwitterHover : DarkTwitter
                  }
                  width={13}
                  className="hidden dark:block"
                />
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
                className="w-8 h-8 rounded-full justify-center items-center flex hover:bg-[#dee2e6] bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="medium"
                data-tooltip-placement="top"
                onMouseOver={() => setIsHovering('medium')}
                onMouseOut={() => setIsHovering('')}
              >
                <img
                  src={isHovering == 'medium' ? LightMediumHover : LightMedium}
                  width={13}
                  className="block dark:hidden"
                />
                <img
                  src={isHovering == 'medium' ? LightMediumHover : DarkMedium}
                  width={13}
                  className="hidden dark:block"
                />
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
                className="w-8 h-8 rounded-full justify-center items-center flex hover:bg-[#dee2e6] bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="facebook"
                data-tooltip-placement="top"
                onMouseOver={() => setIsHovering('facebook')}
                onMouseOut={() => setIsHovering('')}
              >
                <img
                  src={
                    isHovering == 'facebook'
                      ? LightFacebookHover
                      : LightFacebook
                  }
                  width={13}
                  className="block dark:hidden"
                />
                <img
                  src={
                    isHovering == 'facebook' ? LightFacebookHover : DarkFacebook
                  }
                  width={13}
                  className="hidden dark:block"
                />
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
                className="w-8 h-8 rounded-full justify-center items-center flex hover:bg-[#dee2e6] bg-[#e9ecef] text-primary text-sm active:bg-[#5f6a74] dark:bg-dBorder dark:text-dHeading dark:hover:bg-[#dee2e6] dark:hover:border-border"
                data-tooltip-target="reddit"
                data-tooltip-placement="top"
                onMouseOver={() => setIsHovering('reddit')}
                onMouseOut={() => setIsHovering('')}
              >
                <img
                  src={isHovering == 'reddit' ? LightRedditHover : LightReddit}
                  width={13}
                  className="block dark:hidden"
                />
                <img
                  src={isHovering == 'reddit' ? LightRedditHover : DarkReddit}
                  width={13}
                  className="hidden dark:block"
                />
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
              <p
                className="text-primary hover:text-link text-base dark:text-dHeading dark:hover:text-link"
                onMouseOver={() => setIsHovering('back_to')}
                onMouseOut={() => setIsHovering('')}
              >
                <img
                  src={isHovering == 'back_to' ? LightArrowHover : LightArrow}
                  className="inline dark:hidden"
                  width={11}
                />
                <img
                  src={isHovering == 'back_to' ? DarkArrowHover : DarkArrow}
                  className="hidden dark:inline"
                  width={11}
                />

                <a href="#!" className="ml-1 text-base" onClick={toTop}>
                  Back to Top
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer mid */}
      <div className="container mx-auto lg:pt-10 lg:pb-[24px]">
        <div className="grid sm:grid-2 lg:grid-cols-3">
          <div className="pt-8 mb-4 lg:pt-0 lg:mb-0">
            <div className="flex align-items-center mb-3">
              <img src={LightEther} width={20} className="block dark:hidden" />
              <img src={DarkEther} width={20} className="hidden dark:block" />
              <p className="text-xl ml-2 dark:text-dHeading">
                Powered by Ethereum
              </p>
            </div>
            <div className="mb-4 lg:mb-3">
              <p className="text-xs sm:mb-4 lg:mb-0 dark:text-dHeading">
                Etherscan is a Block Explorer and Analytics Platform for
                Ethereum, a decentralized smart contracts platform.
              </p>
            </div>
            <div className="hidden lg:block -mb-6 -mt-4">
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
                    Contact Us
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Careers
                    <span className="bg-link  text-[11px] text-[#fff] small fw-medium text-nowrap rounded-full p-1 px-2 ml-2">
                      We're Hiring!
                    </span>
                  </a>
                  <a
                    href="#!"
                    className="text-xs text-primary mb-3 hover:text-link dark:text-dHeading dark:hover:text-link"
                  >
                    Terms of Service
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
                    Priority Suppor
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
