import React from 'react';
import LightBlock from '../assets/images/light-block.png';
import DarkBlock from '../assets/images/dark-block.png';

const LatestBlock = () => {
  const block = [1, 2, 3, 4, 5, 6];
  const listItem = block.map((index: number) => (
    <>
      {/* one block */}
      <div className="grid sm:grid-cols-3 sm:gap-6" key={index}>
        <div className="sm:col-span-1">
          <div className="sm:flex gap-2">
            <div className="hidden sm:flex bg-light rounded-md w-12	h-12 justify-center items-center dark:bg-dLightBg">
              <img src={LightBlock} width={20} className="block dark:hidden" />
              <img src={DarkBlock} width={20} className="hidden dark:block" />
            </div>
            <div className="flex-row">
              <span className="text-base mr-1 sm:hidden dark:text-dSubColor">
                Block
              </span>
              <a
                href="#!"
                className="text-base text-link hover:text-link_hover dark:text-dLinkColor dark:hover:text-dLinkHoverColor"
              >
                16791093
              </a>
              <p className="inline ml-1 sm:ml-0 sm:flex text-small text-secondary dark:text-dSecondary">
                8 secs ago
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 flex justify-between">
          <div className="">
            <p className="text-base text-primary dark:text-dSubColor">
              Fee Recipient{' '}
              <a
                href="#!"
                className="text-link hover:text-link_hover dark:text-dLinkColor dark:hover:text-dLinkHoverColor"
                data-tooltip-target={`block-${index}`}
                data-tooltip-placement="top"
              >
                Fee Recipient: 0xa...
              </a>
              <div
                id={`block-${index}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                0x9ec879b8be5cf85c5616a0a4f4542717d3713eea
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </p>
            <p>
              {' '}
              <a
                href="#!"
                className="text-base text-link hover:text-link_hover dark:text-dLinkColor dark:hover:text-dLinkHoverColor"
                data-tooltip-target={`block-txn-${index}`}
                data-tooltip-placement="top"
              >
                28 txns
              </a>{' '}
              <div
                id={`block-txn-${index}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
              >
                Transactions in this Block
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <span className="text-small text-secondary dark:text-dSecondary">
                in 12 secs
              </span>
            </p>
          </div>
          <div className="hidden sm:flex items-center">
            <span
              className="text-[10.875px] font-medium px-2 py-[4px] rounded-md border border-gray-200 dark:border-dBorder dark:text-dSubColor"
              data-tooltip-target={`block-sec-${index}`}
              data-tooltip-placement="top"
            >
              0.00199 Eth
            </span>
            <div
              id={`block-sec-${index}`}
              role="tooltip"
              className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
            >
              Block Reword
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
      {/* border */}
      {index < block.length ? (
        <div className="border-b border-border mt-4 mb-4 dark:border-dBorder"></div>
      ) : (
        ''
      )}
    </>
  ));
  return (
    <div className="border border-border rounded-xl shadow-[0_8px_19.2px_0_rgba(189,197,209,0.2)] bg-white dark:bg-dBgColor dark:border-dBorder dark:shadow-[0_8px_19.2px_0_rgba(82,85,92,0.15)]">
      <div className="p-4 border-b border-border dark:border-dBorder">
        <p className="text-sm text-primary font-medium dark:text-dHeading">
          Latest Blocks
        </p>
      </div>
      <div className="h-[484.8px] sm:h-auto scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100  scrollbar-w-2 scrollbar-h-50 scrollbar-thumb-rounded">
        <div className="p-4">{listItem}</div>
      </div>
      <a
        href="#!"
        className="p-4 border-t border-border flex uppercase text-cap text-secondary hover:text-link items-center justify-center bg-light rounded-b-xl dark:bg-dLightBg dark:border-dBorder dark:text-dSecondary dark:hover:text-link"
      >
        <span className="font-medium">View all blocks</span>
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};
export default LatestBlock;
