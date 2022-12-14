import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Setting = () => {
  const router = useRouter();
  const [data, setData] = useState({
    token: "",
    apiUrl: "",
    servicePointId: "",
    room_name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("apiUrl", data.apiUrl);
    localStorage.setItem("token", data.token);
    localStorage.setItem("servicePointId", data.servicePointId);
    localStorage.setItem("roomName", data.room_name);
    router.push(`/`);
  };
  useEffect(() => {
    setData({
      token: localStorage.getItem("token") || "",
      apiUrl: localStorage.getItem("apiUrl") || "",
      servicePointId: localStorage.getItem("servicePointId") || "",
      room_name: localStorage.getItem("roomName") || "",
    });
  }, []);

  return (
    <div className="grid justify-items-center p-5">
      <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ตั้งค่าการใช้งาน
        </h5>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            API URL (http://localhost:4488/v2)
          </label>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, apiUrl: e.target.value });
            }}
            value={data.apiUrl}
            name="apiUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            TOKEN
          </label>
          <input
            value={data.token}
            onChange={(e) => {
              setData({ ...data, token: e.target.value });
            }}
            type="text"
            name="token"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            servicePoint (1, 2, 3, ... )
          </label>
          <input
            value={data.servicePointId}
            onChange={(e) => {
              setData({ ...data, servicePointId: e.target.value });
            }}
            type="text"
            name="servicePoint"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="room_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            ชื่อจุดบริการ
          </label>
          <input
            value={data.room_name}
            onChange={(e) => {
              setData({ ...data, room_name: e.target.value });
            }}
            type="text"
            name="room_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          บันทึก
        </button>
      </div>
    </div>
  );
};

export default Setting;
