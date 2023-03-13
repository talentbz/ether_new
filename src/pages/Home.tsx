import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Contents from '../components/Contents';

const Home = () => {
  const [darkToggle, setDarkToggle] = React.useState(
    localStorage.getItem('darkToggle') == 'false',
  );
  console.log(localStorage.getItem('darkToggle'));
  return (
    <div className={`${darkToggle ? 'dark' : 'light'}`}>
      <div className="dark:bg-[#181818]">
        <Header dark={darkToggle} handleDark={setDarkToggle} />
        <Search />
        <Contents />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
