import React from "react";
import iconArrow from "../assets/icon-arrow.svg";

const Searchbar = ({searchTerm, setSearchTerm}) => {
  
console.log(searchTerm);
  
const handleSubmit= (search) => {

};
  
  return (
    <div>
      <form>
        <label className="h-[58px] w-[555px] rounded-xl flex align-center overflow-hidden">
          <input
            className="h-[58px] w-[497px] pl-5 font-medium outline-none"
            placeholder="Search for any IP address or domain"
            type="text"
            onChange={(e) => {
              e.preventDefault(); 
              setSearchTerm(e.target.value);  
            }}
          />
          <input
            type="image"
            src={iconArrow}
            alt="arrow"
            onClick={handleSubmit(searchTerm)}
            className="h-[58px] w-[58px] bg-black object-none"
          />
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
