import React, { useEffect, useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    setRoomName(localStorage.getItem("roomName"));
  }, [roomName]);

  return (
    <div className="flex justify-between bg-purple-800">
      <div className="basis-1/3 mx-10">
        <Link href="/setting">
          <h1 className="text-[60px] font-bold text-white">หมายเลขคิว</h1>
        </Link>
      </div>
      <div className="basis-1/3 mx-10 text-center">
        <h1 className="text-[60px] font-bold text-white">{roomName}</h1>
      </div>
      <div className="basis-1/3 text-right mx-10">
        <h1 className="text-[60px] font-bold text-white">จุดให้บริการ</h1>
      </div>
    </div>
  );
};

export default NavBar;
