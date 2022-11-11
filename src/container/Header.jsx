import React from "react";
import Searchbar from "../components/Searchbar";

const Header = ({searchTerm, setSearchTerm}) => {
  
  return (
    <div className="w-full h-[280px] bg-hero bg-cover flex justify-center">
      <div className="w-[600px] flex-col justify-center ">
        <div className="text-white text-3xl font-bold pt-[30px] flex justify-center">
          <h1>IP Address Tracker</h1>
        </div>
        <div className="pt-[28px] flex justify-center">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Header;
