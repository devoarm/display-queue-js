import React from "react";
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className="flex justify-between bg-purple-800">
      <div className="basis-1/3 mx-10">
        <h1 className="text-[60px] font-bold text-white">หมายเลขคิว</h1>
      </div>
      <div className="basis-1/3 mx-10 text-center">
        <Link href='/setting'>
        <h1 className="text-[60px] font-bold text-white">ห้องยา</h1>
        </Link>
      </div>
      <div className="basis-1/3 text-right mx-10">
        <h1 className="text-[60px] font-bold text-white">จุดให้บริการ</h1>
      </div>
    </div>
  );
};

export default NavBar;
