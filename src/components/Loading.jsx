import React from "react";
import {MutatingDots} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="spinner">
      <MutatingDots
        height="100"
        width="100"
        color="#0066FF"
        secondaryColor="#0044FF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
