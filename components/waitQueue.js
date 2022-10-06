import React from "react";

const WaitQueue = (props) => {
  return (
    <div className="bg-red-600 text-white text-6xl font-bold rounded p-3 m-3">
      <p>{props.queue_number}</p>
    </div>
  );
};

export default WaitQueue;
