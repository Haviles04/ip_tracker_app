import React from "react";
import Searchbar from "../components/Searchbar";
import Error from "../components/Error";

const Header = ({ setInfo, errorMsg, setErrorMsg, setLoading }) => {
  return (
    <div className="w-full h-[300px] md:h-[280px] bg-hero bg-cover flex justify-center">
      <div>
        <div className="text-white text-2xl md:text-3xl md:font-bold pt-[29px] flex justify-center">
          <h1>IP Address Tracker</h1>
        </div>
        <div className="pt-[23px]">
          <Searchbar setInfo={setInfo} setErrorMsg={setErrorMsg} setLoading={setLoading} />
        </div>
        {errorMsg && <Error />}
      </div>
    </div>
  );
};

export default Header;
