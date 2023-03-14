import React from 'react';

const Search = () => {
  return (
    <div className="pt-14 pb-20 bg-searchBg bg-[#111b36] dark:bg-dSearchBg dark:bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-12 mb-5">
          <div className="col-span-9 lg:col-span-7">
            <h1 className="text-[1.23rem] mb-3 text-white font-medium">
              The Ethereum Blockchain Explorer
            </h1>
            <form action="" className="search-form mb-3">
              <div className="flex gap-2 p-1.5 justify-between p-1.5 bg-white border rounded-lg bg-white dark:bg-dBgColor dark:border-dBorder">
                <div className="hidden sm:block ">
                  <select
                    name=""
                    className="text-base w-full px-2 py-1.5 border-none rounded-lg focus:border-border dark:bg-dBgColor dark:text-dSubColor"
                  >
                    <option value="0">All Filters</option>
                    <option value="1">Addresses</option>
                    <option value="2">Tokens</option>
                    <option value="3">Name Tags</option>
                    <option value="4">Labels</option>
                    <option value="5">Websites</option>
                  </select>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                    className="text-base text-primary w-full px-2 py-1.5 rounded-lg border-none dark:bg-dBgColor dark:text-dSubColor d-placeholder"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white py-1.5 px-3 text-sm rounded-lg bg-link border-link hover:bg-link_hover hover:border-link_hover"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>
            <p className="min-h-[14.19px]"></p>
          </div>
          <div className="hidden lg:block lg:col-span-5 m-auto">
            <a href="#!" className="mt-5 mr-10">
              <span className="bg-white  text-[12.6px] small text-nowrap rounded-md p-0.5 px-1 dark:bg-dBgColor dark:text-dSubColor">
                Ad
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
