import React from 'react';
import Chart from './Chart';
import LatestBlock from './LatestBlock';
import LatestTransaction from './LatestTransaction';
import LightEther from '../assets/images/ethereum-original.svg';
import DarkEther from '../assets/images/ethereum-original-light.svg';
import LightGlobe from '../assets/images/light-globe.png';
import DarkGlobe from '../assets/images/dark-globe.png';
import LightServer from '../assets/images/light-server.png';
import DarkServer from '../assets/images/dark-server.png';
import LightTemp from '../assets/images/light-temp.png';
import DarkTemp from '../assets/images/dark-temp.png';

const Contents = () => {
  return (
    <div className="">
      <div className="container mx-auto pb-20">
        <div className="bg-white -mt-12 rounded-xl border border-border contents-border mb-4 dark:bg-dBgColor dark:border-dBorder">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 py-5">
            {/* ether price */}
            <div className="px-5 sm:border-r sm:border-border dark:border-dBorder">
              <div className="flex pb-5">
                <div className="mr-3">
                  <img
                    src={LightEther}
                    width={18}
                    className="block dark:hidden"
                  />
                  <img
                    src={DarkEther}
                    width={18}
                    className="hidden dark:block"
                  />
                </div>
                <div className="">
                  <p className="text-cap text-secondary dark:text-dSecondary">
                    ETHER PRICE
                  </p>
                  <a
                    href="#!"
                    className="text-sm text-primary hover:text-link dark:text-dSubColor"
                    data-tooltip-target="tEtherPrice"
                    data-tooltip-placement="bottom"
                  >
                    $1,557.95
                    <span className="text-secondary hover:text-secondary dark:text-dSecondary">
                      {' '}
                      @ 0.06987 BTC
                    </span>
                    <span className="text-small text-danger"> (-1.16%)</span>
                  </a>
                  <div
                    id="tEtherPrice"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                  >
                    View Historical Ether Price
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div className="flex border-b pb-5 sm:pb-0 sm:border-b-0 pt-5 border-t border-border dark:border-dBorder">
                <div className="mr-3">
                  <img
                    src={LightGlobe}
                    width={24}
                    className="block dark:hidden"
                  />
                  <img
                    src={DarkGlobe}
                    width={24}
                    className="hidden dark:block"
                  />
                </div>
                <div className="">
                  <p className="text-cap text-secondary dark:text-dSecondary">
                    MARKET CAP
                  </p>
                  <a
                    href="#!"
                    className="text-sm text-primary hover:text-link dark:text-dSubColor"
                  >
                    $187,692,195,019.00
                  </a>
                </div>
              </div>
            </div>
            {/* transaction history */}
            <div className="py-5 sm:py-0 px-5 lg:border-r border-border dark:border-dBorder">
              <div className="flex pb-5 justify-between">
                <div className="flex">
                  <div className="mr-3">
                    <img
                      src={LightServer}
                      width={24}
                      className="block dark:hidden"
                    />
                    <img
                      src={DarkServer}
                      width={24}
                      className="hidden dark:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-cap text-secondary dark:text-dSecondary">
                      TRANSACTIONS
                    </p>
                    <a
                      href="#!"
                      className="text-sm text-primary hover:text-link dark:text-dSubColor"
                      data-tooltip-target="tTransaction"
                      data-tooltip-placement="left"
                    >
                      1,895.43 M
                    </a>
                    <div
                      id="tTransaction"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                    >
                      Total Transactions Counter <br />
                      (Update every 5 mins)
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <span
                      className="text-base text-secondary hover:text-secondary dark:text-dSecondary"
                      data-tooltip-target="tTPS"
                      data-tooltip-placement="bottom"
                    >
                      {' '}
                      (12.7 TPS)
                    </span>
                    <div
                      id="tTPS"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                    >
                      Transactions per Second
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cap text-secondary dark:text-dSecondary">
                    MED GAS PRICE
                  </p>
                  <a
                    href="#!"
                    className="text-sm text-primary hover:text-link dark:text-dSubColor"
                    data-tooltip-target="tMED"
                    data-tooltip-placement="bottom"
                  >
                    40 Gwei
                    <span className="text-base text-secondary hover:text-secondary dark:text-dSecondary">
                      {' '}
                      ($1.31)
                    </span>
                  </a>
                  <div
                    id="tMED"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-center text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                  >
                    Base Fee: 40 Gwei <br /> Priority Fee: 0 Gwei
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div className="flex pt-5 border-t border-border justify-between dark:border-dBorder">
                <div className="flex">
                  <div className="mr-3">
                    <img
                      src={LightTemp}
                      width={24}
                      className="block dark:hidden"
                    />
                    <img
                      src={DarkTemp}
                      width={24}
                      className="hidden dark:block"
                    />
                  </div>
                  <div className="">
                    <p className="text-cap text-secondary dark:text-dSecondary">
                      LAST FINALIZED BLOCK
                    </p>
                    <span
                      className="text-sm dark:text-dSubColor"
                      data-tooltip-target="tLastBlock"
                      data-tooltip-placement="bottom"
                    >
                      16777520
                    </span>
                    <div
                      id="tLastBlock"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-center text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                    >
                      This block is finalized and cannot be reverted without
                      <br />
                      slashing at least 1/3 of all validators
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cap text-secondary dark:text-dSecondary">
                    LAST SAFE BLOCK
                  </p>
                  <span
                    className="text-sm dark:text-dSubColor"
                    data-tooltip-target="tLastSafeBlock"
                    data-tooltip-placement="bottom"
                  >
                    16777520
                  </span>
                  <div
                    id="tLastSafeBlock"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-[4px] px-[8px] text-xs text-white bg-tooltip rounded-lg tooltip dark:bg-dTooltipBg dark:text-white"
                  >
                    This block is safe and is unlikely to be reverted.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile border  */}
            <div className="mx-5 border-b border-border sm:col-span-2 sm:mx-5 sm:pt-5 lg:hidden dark:border-dBorder"></div>
            {/* chart view */}
            <div className="pt-5 sm:col-span-2 lg:col-span-1 px-5 lg:pt-0">
              <p className="text-cap text-secondary dark:text-dSecondary">
                TRANSACTION HISTORY IN 14 DAYS
              </p>
              <Chart />
            </div>
            {/* ether transaction */}
          </div>
        </div>
        <div className="lg:hidden grid justify-items-center m-auto items-center">
          <a href="#!" className="-mt-3 mb-2">
            <span className="bg-white  text-[12.6px] small text-nowrap rounded-md p-0.5 px-1 dark:bg-dBgColor dark:text-dSubColor">
              Ad
            </span>
          </a>
        </div>
        {/* latest block */}
        <div className="grid lg:grid-cols-2 gap-4">
          <LatestBlock />
          <LatestTransaction />
        </div>
      </div>
    </div>
  );
};
export default Contents;
