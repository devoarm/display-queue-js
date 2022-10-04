import React from "react";

const CurrentQueue = (proms) => {
  return (
    <div className="bg-green-600 flex justify-between">
      <div className="basis-2/4 mx-10">
        <h1 className="text-[180px] font-bold text-white">
          {proms.queueNumber}
        </h1>
      </div>
      <div className="basis-2/4 text-right mx-10">
        <h1 className="text-[180px] font-bold text-white">
          {proms.servicePointId}
        </h1>
      </div>
    </div>
  );
};

export default CurrentQueue;
