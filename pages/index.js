import React, { useEffect, useState, useRef } from "react";
import IFrame from "../components/iframe";
import WaitQueue from "../components/waitQueue";
import Navbar from "../components/navbar";
import CurrentQueue from "../components/currentQueue";
import mqtt, { connect } from "mqtt";
const axios = require("axios").default;
const Home = () => {
  const [status, setStatus] = useState(false);
  const [queueCurrent, setQueueCurrent] = useState({
    room_name: "",
    queue_number: "",
  });
  const [skipQueues, setSkipQueues] = useState([]);
  const [apiUrl, setApiUrl] = useState("");
  const [token, setToken] = useState("");
  const [servicePointId, setServicePointId] = useState("");
  const [roomName, setRoomName] = useState('')
  const fetchQueue = async () => {
    const res = await axios.get(`${apiUrl}/queue/working/${servicePointId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data.results[0];
    console.log(data);
    setQueueCurrent(data);
    handleVoices(
      data.queue_number,
      data.room_name,
      data.first_name,
      data.last_name
    );
  };
  const fetchSkipQueue = async () => {
    const res = await axios.get(
      `${apiUrl}/queue/ListSkipQueue/${localStorage.getItem("servicePointId")}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = res.data.results;
    setSkipQueues(data);
  };
  function handleVoices(queue_number, room_name, first_name, last_name) {
    var message = new SpeechSynthesisUtterance();
    message.lang = "th-TH";
    message.rate = 0.9;

    message.text = `ขอเชิญหมายเลข ${queue_number} คุณ ${first_name} ${last_name} มาที่ ${room_name}`;
    speechSynthesis.speak(message);
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setApiUrl(localStorage.getItem("apiUrl"));
    setServicePointId(localStorage.getItem("servicePointId"));
    
    fetchSkipQueue();
    var client;
    const username = "q4u";
    const password = "##q4u##";
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
    const servicePointId = localStorage.getItem("servicePointId") || "";
    const arrayService = servicePointId.split(",");

    client = mqtt.connect("ws://192.168.3.229:8888", {
      username: username,
      password: password,
      clientId: clientId,
      connectTimeout: 4000,
      reconnectPeriod: 1000,
    });
    client.on("connect", () => {
      setStatus(true);
      console.log("connected");
      console.log(arrayService.length);
      for (let i = 0; i < arrayService.length; i++) {
        client.subscribe(`queue/group/${arrayService[i]}`, (error) => {
          console.log(`Subscribe : queue/group/${arrayService[i]}`);
        });
      }
    });
    client.on("message", (_topic, playload) => {
      // setQueueCurrent(JSON.parse(playload));
      fetchQueue();
      fetchSkipQueue();
    });
  }, [status]);
  return (
    <div className="h-screen">
      <Navbar />
      <CurrentQueue
        servicePointId={queueCurrent.room_name}
        queueNumber={queueCurrent.queue_number}
      />
      <div className="flex justify-between mt-2 h-[30rem]">
        <div className="basis-1/4 mx-10 bg-gray-200 p-4 rounded">
          <h1 className="text-[50px] font-bold" onClick={() => {}}>
            คิวที่เรียกแล้วไม่มา
          </h1>
          <div className="flex flex-wrap">
            {skipQueues.map((object, i) => (
              <WaitQueue queue_number={object.queue_number} key={i} />
            ))}
          </div>
        </div>
        <div className="basis-3/4 mx-10">
          <IFrame />
        </div>
      </div>
    </div>
  );
};

export default Home;
