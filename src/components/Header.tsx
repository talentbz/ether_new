import React, { useState, useRef, useEffect } from 'react';
import LightSun from '../assets/images/light-sun.png';
import DarkSun from '../assets/images/dark-sun.png';
import LightMoon from '../assets/images/light-moon.png';
import DarkMoon from '../assets/images/dark-moon.png';
import LightSetting from '../assets/images/light-setting.png';
import DarkSetting from '../assets/images/dark-setting.png';
import LightEther from '../assets/images/ethereum-original.svg';
import DarkEther from '../assets/images/ethereum-original-light.svg';
import LightGas from '../assets/images/light-gas.png';
import DarkGas from '../assets/images/dark-gas.png';
import LightLogo from '../assets/images/logo-etherscan.svg';
import DarkLogo from '../assets/images/logo-etherscan-light.svg';
import LightBlockScanLogo from '../assets/images/blockscan-logo-light.svg';
import DarkBlockScanLogo from '../assets/images/blockscan-logo-dark.svg';

// more icons (light)
import LightUnit from '../assets/images/light-unit.png';
import LightList from '../assets/images/light-list.png';
import LightSudan from '../assets/images/light-sudan.png';
import LightDex from '../assets/images/light-dex.png';
import LightNode from '../assets/images/light-node.png';
import LightLabel from '../assets/images/light-label.png';
import LightEns from '../assets/images/light-ens.png';
import LightToken from '../assets/images/light-token.png';
import LightVerify from '../assets/images/light-verify.png';
import LightChat from '../assets/images/light-chat.png';

// more icons (dark)
import DarkUnit from '../assets/images/dark-unit.png';
import DarkList from '../assets/images/dark-list.png';
import DarkSudan from '../assets/images/dark-sudan.png';
import DarkDex from '../assets/images/dark-dex.png';
import DarkNode from '../assets/images/dark-node.png';
import DarkLabel from '../assets/images/dark-label.png';
import DarkEns from '../assets/images/dark-ens.png';
import DarkToken from '../assets/images/dark-token.png';
import DarkVerify from '../assets/images/dark-verify.png';
import DarkChat from '../assets/images/dark-chat.png';

interface Props {
  options: string[];
}

const Header = (dark: any, handleDark: any, options: any) => {
  const [navbar, setNavbar] = useState(false);
  const [selected, setSelected] = useState('');
  // Mouse out event
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMobile = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      dropdownMobile.current &&
      !dropdownMobile.current.contains(event.target as Node)
    ) {
      setSelected('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      console.log(handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <>
      {/* top header section */}
      <div className="hidden border-b border-border py-1 lg:block sticky bg-white z-10 top-0 dark:bg-dBgColor dark:border-dBorder">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between ">
            <div className="flex gap-4 items-center">
              <div>
                <span className="text-secondary text-xs font-normal	dark:text-dSecondary">
                  ETH Price:
                </span>
                <a
                  href="#"
                  className="text-link hover:text-link_hover text-xs dark:text-dLinkColor dark:hover:dLinkHoverColor"
                >
                  {' '}
                  $1,566.30
                </a>
                <span
                  className="text-danger text-xs "
                  data-tooltip-target="tooltip-top"
                  data-tooltip-placement="right"
                >
                  {' '}
                  (-0.02%)
                </span>
                <div
                  id="tooltip-top"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                >
                  Changes in the last 24 hours
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div className="flex items-center">
                <img src={LightGas} width={15} className="block dark:hidden" />
                <img src={DarkGas} width={15} className="hidden dark:block" />
                <span className="text-secondary text-xs font-normal	pl-1 dark:text-dSecondary">
                  Gas:
                </span>
                <a
                  href="#"
                  className="text-link hover:text-link_hover text-xs dark:text-dLinkColor dark:hover:dLinkHoverColor"
                  data-tooltip-target="tGas"
                  data-tooltip-placement="bottom"
                >
                  {' '}
                  29 Gwei
                </a>
                <div
                  id="tGas"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-[8px] py-[4px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                >
                  Base Fee: 29 Gwei
                  <br />
                  Priority Fee: 0 Gwei
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-2" ref={dropdownRef}>
                <div className="relative">
                  <button
                    className="border rounded-lg border-border hover:bg-border focus:bg-border w-[38px]	h-[38px] flex justify-center items-center dark:border-dBorder dark:focus:bg-dBorder dark:hover:bg-dBorder"
                    onClick={() =>
                      setSelected(selected !== 'themeColor' ? 'themeColor' : '')
                    }
                  >
                    <img
                      src={LightSun}
                      width={15}
                      className="block dark:hidden"
                    />
                    <img
                      src={DarkMoon}
                      width={12}
                      className="hidden dark:block"
                    />
                  </button>
                  {/* theme color setting */}
                  <div
                    className={`absolute bg-white border border-bg rounded-md right-0 top-[40px] shadow-[0_8px_16px_0_rgba(0,0,0,0.15)] dark:bg-[#111] dark:border-dBorder ${
                      selected == 'themeColor' ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="p-2 flex-row">
                      <a
                        href="#!"
                        className={`text-cap text-primary py-1.5 px-3 flex items-center hover:rounded-md mb-1 w-[142px] ${
                          dark.dark
                            ? 'hover:bg-border dark:hover:bg-dBgLink'
                            : 'active-color'
                        } dark:text-dPrimary `}
                        onClick={() => {
                          dark.handleDark(false);
                          localStorage.setItem('darkToggle', dark.dark);
                        }}
                      >
                        <img
                          src={LightSun}
                          width={15}
                          className="inline mr-2 block dark:hidden"
                        />
                        <img
                          src={DarkSun}
                          width={15}
                          className="inline mr-2 hidden dark:block"
                        />
                        <span>Light</span>
                      </a>
                      <a
                        href="#!"
                        className={`text-cap text-primary py-1.5 px-3 flex items-center hover:rounded-md mb-1 w-[142px] ${
                          dark.dark
                            ? 'active-color'
                            : 'hover:bg-border dark:hover:bg-dBgLink'
                        } dark:text-dPrimary `}
                        onClick={() => {
                          dark.handleDark(true);
                          localStorage.setItem('darkToggle', dark.dark);
                        }}
                      >
                        <img
                          src={LightMoon}
                          width={11}
                          className="inline mr-3 block dark:hidden"
                        />
                        <img
                          src={DarkMoon}
                          width={11}
                          className="inline mr-3 hidden dark:block"
                        />
                        <span>Dark</span>
                      </a>
                      <div className="border-b border-border my-2 dark:border-dBorder"></div>
                      <a
                        href="#!"
                        className="text-cap text-primary py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[142px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        <img
                          src={LightSetting}
                          width={13}
                          className="inline mr-2 block dark:hidden"
                        />
                        <img
                          src={DarkSetting}
                          width={13}
                          className="inline mr-2 hidden dark:block"
                        />
                        <span className="mr-1">Site Settings</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="border rounded-lg border-border hover:bg-border focus:bg-border w-[38px]	h-[38px] flex justify-center items-center dark:border-dBorder dark:focus:bg-dBorder dark:hover:bg-dBorder"
                    onClick={() =>
                      setSelected(
                        selected !== 'ehterSetting' ? 'ehterSetting' : '',
                      )
                    }
                  >
                    <img
                      src={LightEther}
                      width={10}
                      className="block dark:hidden"
                    />
                    <img
                      src={DarkEther}
                      width={10}
                      className="hidden dark:block"
                    />
                  </button>
                  {/* ether setting */}
                  <div
                    className={`absolute bg-white border border-bg rounded-md right-0 top-[40px] shadow-[0_8px_16px_0_rgba(0,0,0,0.15)] dark:bg-[#111] dark:border-dBorder ${
                      selected == 'ehterSetting' ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="p-2 flex-row">
                      <a
                        href="#!"
                        className="text-cap text-link py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[162.17px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        Ethereum Mainnet
                      </a>
                      <a
                        href="#!"
                        className="text-cap text-primary py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[162.17px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        Ethereum Mainnet
                        <span
                          className="text-[9.4px] font-bold px-[7px] rounded-md border border-border bg-light ml-2 dark:bg-[#151515] 
 dark:text-[#F5F5F5 
] dark:border-dBorder"
                        >
                          CN
                        </span>
                      </a>
                      <a
                        href="#!"
                        className="text-cap text-primary py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[162.17px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        Beaconscan
                        <span
                          className="text-[9.4px] font-bold px-[7px] rounded-md border border-border bg-light ml-2 dark:bg-[#151515] 
 dark:text-[#F5F5F5 
] dark:border-dBorder"
                        >
                          ETH2
                        </span>
                      </a>
                      <div className="border-b border-border my-2 dark:border-dBorder"></div>
                      <a
                        href="#!"
                        className="text-cap text-primary py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[162.17px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        Goerli Testnet
                      </a>
                      <a
                        href="#!"
                        className="text-cap text-primary py-1.5 px-3 flex items-center hover:bg-border hover:rounded-md mb-1 w-[162.17px] dark:hover:bg-dBgLink dark:text-dPrimary"
                      >
                        Sepolia Testnet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main header section */}
      <div
        className="border-b bg-white border-border dark:bg-dBgColor dark:border-dBorder"
        ref={dropdownMobile}
      >
        <div className="container mx-auto px-5">
          <div className="lg:flex align-items-center justify-between ">
            <div className="flex align-items-center justify-between">
              <a href="#!" className="flex align-items-center">
                <img
                  src={LightLogo}
                  width={150}
                  className="block dark:hidden"
                />
                <img src={DarkLogo} width={150} className="hidden dark:block" />
              </a>
              {/* mobile toggle menu */}
              <div className="lg:hidden flex items-center gap-4">
                <a
                  href="#!"
                  className="text-primary text-base py-4 hover:text-link flex items-center gap-1 dark:text-dSubColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Sign In
                </a>
                <button
                  className="p-1.5 text-[#595c5f] rounded-md border border-border focus:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:border-dBorder dark:text-[#949494]"
                  onClick={() => setNavbar(!navbar)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* main menu */}
            <div
              className={`pb-2 sm:pb-0 pt-2 lg:pt-0 lg:flex align-items-center ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a href="#!" className="text-link text-base lg:py-4 lg:px-3">
                  Home
                </a>
              </div>
              {/* block chain */}
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_block' ? 'Li_block' : '')
                  }
                >
                  Blockchain
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_block' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Transactions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Pending Transactions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#"
                    >
                      Contract Internal Transactions
                    </a>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                      href="#"
                    >
                      View Blocks
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Pending Transactions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#"
                    >
                      Forked Blocks (Reorgs)
                    </a>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                      href="#"
                    >
                      Top Accounts
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Verified Contracts
                    </a>
                  </li>
                </ul>
              </div>
              {/* Token submenu */}
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_token' ? 'Li_token' : '')
                  }
                >
                  Tokens
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_token' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Top Tokens
                      <span className="text-small"> (ERC-20)</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Top Tokens
                      <span className="text-small"> (ERC-20)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* NFT submenu */}
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_NFT' ? 'Li_NFT' : '')
                  }
                >
                  NFTs
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_NFT' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Top NFTs
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Latest Trades
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Latest Transfers
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Latest Mints
                    </a>
                  </li>
                </ul>
              </div>
              {/* resource submenu */}
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_resource' ? 'Li_resource' : '')
                  }
                >
                  Resources
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_resource' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Charts And Stats
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#"
                    >
                      Top Statistics
                    </a>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                      href="#"
                    >
                      Directory
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </li>
                </ul>
              </div>
              {/* Developers submenu */}
              <div className="dropdown py-2 lg:py-0 relative lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(
                      selected !== 'Li_developer' ? 'Li_developer' : '',
                    )
                  }
                >
                  Developers
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_developer' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Charts And Stats
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#"
                    >
                      Top Statistics
                    </a>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                      href="#"
                    >
                      Directory
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </li>
                </ul>
              </div>
              {/* More submenu */}
              <div className="dropdown py-2 last-dropdown lg:py-0 lg:flex items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_more' ? 'Li_more' : '')
                  }
                >
                  More
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <div
                  className={`dropdown-menu z-10 border mt-1 rounded-md border-border lg:mt-0 lg:border-0 lg:absolute lg:hidden lg:top-[101px] lg:right-0 lg:left-0 lg:container lg:p-0 dark:border-dBorder ${
                    selected == 'Li_more' ? 'block' : 'hidden'
                  }`}
                >
                  <div className="rounded-md lg:rounded-none bg-white lg:border-t-[3px] lg:border-link lg:rounded-b-lg p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] dark:bg-dBgColor dark:border-none">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                      <div className="order-6 sm:col-span-3 lg:col-span-1 bg-[#f8f9fa] rounded-md p-5 lg:order-first dark:bg-[#151515]">
                        <div>
                          <h6 className="text-base font-medium mb-2 dark:text-[#fafafa]">
                            Tools & Services
                          </h6>
                          <p className="text-xs dark:text-[#fafafa]">
                            Discover more of Etherscan's tools and services in
                            one place.
                          </p>
                        </div>
                        <div className="mt-3 lg:mt-20">
                          <p className="text-xs text-secondary dark:text-dSecondary">
                            Sponsored
                          </p>
                          <div>
                            <img
                              src={LightBlockScanLogo}
                              width={100}
                              className="block dark:hidden"
                            />
                            <img
                              src={DarkBlockScanLogo}
                              width={100}
                              className="hidden dark:block"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-5 rounded-md lg:p-5 ">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-primary mb-3 dark:text-[#fafafa]">
                            Tools
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightUnit}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkUnit}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Charts And Stats
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightList}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkList}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Eth2 Beacon Chain Deposits
                          </a>
                        </div>
                      </div>
                      <div className="px-2 py-5 rounded-md lg:p-5 ">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-primary mb-3 dark:text-[#fafafa]">
                            Explore
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightSudan}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkSudan}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Gas Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightDex}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkDex}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            DEX Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightNode}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkNode}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Node Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightLabel}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkLabel}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Label Cloud
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightEns}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkEns}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            ENS Lookup
                          </a>
                        </div>
                      </div>
                      <div className="px-2 py-5 rounded-md lg:p-5 ">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-primary mb-3 dark:text-[#fafafa]">
                            Services
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightToken}
                              width={13}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkToken}
                              width={13}
                              className="hidden dark:inline mr-2"
                            />
                            Token Approvals
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightVerify}
                              width={15}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkVerify}
                              width={15}
                              className="hidden dark:inline mr-2"
                            />
                            Verified Signature
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-primary hover:rounded-md hover:bg-[#e9ecef] block dark:hover:bg-dSubHoverBg dark:text-dPrimary dark:hover:text-dSubColor"
                            href="#"
                          >
                            <img
                              src={LightChat}
                              width={15}
                              className="inline dark:hidden mr-2"
                            />
                            <img
                              src={DarkChat}
                              width={15}
                              className="hidden dark:inline mr-2"
                            />
                            Blockscan Chat
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:flex items-center ">
                <span className="text-primary text-base dark:text-dSecondary">
                  |
                </span>
              </div>
              {/* Exproler submenr */}
              <div className="dropdown py-2 lg:py-0 relative lg:hidden items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_exproler' ? 'Li_exproler' : '')
                  }
                >
                  Exprolers
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_exproler' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Ethereum Mainnet
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#"
                    >
                      Ethereum Mainnet
                      <span
                        className="text-[9.4px] font-bold px-[7px] rounded-md border border-border bg-light ml-2 dark:bg-[#151515] 
 dark:text-[#F5F5F5 
] dark:border-dBorder"
                      >
                        CN
                      </span>
                    </a>
                    <li className="mb-1 dark:border-dBorder">
                      <a
                        className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                        href="#"
                      >
                        Beaconscan
                        <span
                          className="text-[9.4px] font-bold px-[7px] rounded-md border border-border bg-light ml-2 dark:bg-[#151515] 
 dark:text-[#F5F5F5 
] dark:border-dBorder"
                        >
                          ETH2
                        </span>
                      </a>
                    </li>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mt-2"
                      href="#"
                    >
                      Goerli Testnet
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor"
                      href="#"
                    >
                      Sepolia Testnet
                    </a>
                  </li>
                </ul>
              </div>
              {/* Exproler submenr */}
              <div className="dropdown py-2 lg:py-0 relative lg:hidden items-center">
                <a
                  href="#!"
                  className="flex justify-between lg:block text-primary text-base lg:py-4 lg:px-3 hover:text-link dark:text-dPrimary dark:hover:text-link"
                  onClick={() =>
                    setSelected(selected !== 'Li_setting' ? 'Li_setting' : '')
                  }
                >
                  Apearance & Settings
                  <i className="fa fa-angle-down ml-1"></i>
                </a>
                <ul
                  className={`dropdown-menu border mt-1 rounded-md border-border lg:border-0 lg:absolute lg:hidden bg-white lg:top-[54px] lg:left-0 lg:border-t-[3px] lg:border-link lg:rounded-none lg:rounded-b-lg lg:mt-0 lg:min-w-[14rem] p-2 lg:shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] z-10 dark:bg-dBgColor dark:border-dBorder ${
                    selected == 'Li_setting' ? 'block' : 'hidden'
                  }`}
                >
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#!"
                      onClick={() => {
                        dark.handleDark(false);
                        localStorage.setItem('darkToggle', dark.dark);
                      }}
                    >
                      <img src={DarkSun} width={15} className="inline mr-2" />
                      <span>Light</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="rounded-lg hover:bg-border py-1.5 px-3 block text-submenu dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor mb-2"
                      href="#!"
                      onClick={() => {
                        dark.handleDark(true);
                        localStorage.setItem('darkToggle', dark.dark);
                      }}
                    >
                      <img src={LightMoon} width={11} className="inline mr-3" />
                      <span>Dark</span>
                    </a>
                  </li>
                  <li className="mb-1 border-t border-border dark:border-dBorder">
                    <a
                      className="rounded-lg flex items-center hover:bg-border py-1.5 px-3 block text-submenu mt-2"
                      href="#"
                    >
                      <img
                        src={LightSetting}
                        width={13}
                        className="inline mr-2"
                      />
                      <span className="mr-1 dark:text-dSubMenu dark:hover:bg-dSubHoverBg dark:hover:text-dSubColor">
                        Site Settings
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#!"
                className="hidden lg:block text-primary text-base lg:p-4 hover:text-link lg:flex items-center gap-1 dark:text-dPrimary dark:hover:text-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4 dark:text-dPrimary dark:hover:text-link"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
