import React, { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg";

const Searchbar = ({ setInfo, setErrorMsg, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  //checks input to determine if it's an ip or domain, then fetchs from correct api, if response is an needed object displays error message

  const handleSubmit = (search) => {
    const ipRegEx =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    const domainRegex =
      /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi;

    const mode = ipRegEx.test(search) ? 'ipAddress' : domainRegex.test(search) ? 'domain' : false;


    if (mode) {
      setLoading(true);
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${mode}=${search}`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          if (response.hasOwnProperty('code')) {
            setErrorMsg(true);
            setLoading(false);
          } else {
            setInfo(response);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrorMsg(true);
    } 
  };

  return (
    <div>
      <form>
        <label className="w-[327px] h-[58px] md:w-[555px] rounded-xl flex overflow-hidden">
          <input
            className="h-[58px] w-[497px] md:pl-5 font-medium outline-none"
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
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(searchTerm);
            }}
            className="h-[58px] w-[58px] bg-black object-none"
          />
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
