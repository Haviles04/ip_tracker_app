import "./App.css";
import Header from "./container/Header";
import React, { useEffect, useState } from "react";
import Infobar from "./components/Infobar";
import Map from "./components/Map";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [info, setInfo] = useState(null);

  let apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!info) {
      fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setInfo(response);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex-col justify-center">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex justify-center mt-[-80]">
        <Infobar info={info} />
      </div>
      <div className="flex">
      <Map />
      </div>
    </div>
  );
}

export default App;
