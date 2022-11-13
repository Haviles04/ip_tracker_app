import "./App.css";
import Header from "./container/Header";
import React, { useEffect, useState } from "react";
import Infobar from "./components/Infobar";
import Maps from "./components/Map";
import Loading from "./components/Loading";

function App() {
  let apiKey = process.env.REACT_APP_API_KEY;

  const [info, setInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!info) {
      setLoading(true);
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if(response.hasOwnProperty('ip') ){
          setInfo(response);
          setLoading(false);}
          
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex-col justify-center">
      <Header setInfo={setInfo} errorMsg={errorMsg} setErrorMsg={setErrorMsg} setLoading={setLoading} />
      <div className="flex justify-center">
        <Infobar info={info} />
      </div>
      <div className="flex justify-center">
      {loading&& (<Loading />)}
      {!loading&& (<Maps info={info} />)}
      </div>
    </div>
  );
}

export default App;
