// import React, { useState, useEffect } from "react";
// import queryString from "query-string";
// import io from "socket.io-client";

// // import TextContainer from "../TextContainer/TextContainer";
// import { Messages } from "../Messages";
// import { InfoBar } from "../InfoBar";
// import { Input } from "../Input";

// import classes from "./Chat.module.scss";

// let socket;

// export const Chat = ({ location }) => {
//   const [name, setName] = useState("");
//   const [room, setRoom] = useState("");
//   const [users, setUsers] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const ENDPOINT = "localhost:5000";

//   useEffect(() => {
//     const { name, room } = queryString.parse(location.search);

//     socket = io(ENDPOINT);

//     setRoom(room);
//     setName(name);

//     socket.emit("join", { name, room }, (error) => {
//       if (error) {
//         alert(error);
//       }
//     });
//     return () => {};
//   }, [ENDPOINT, location.search]);

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((messages) => [...messages, message]);
//     });
//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if (message) {
//       socket.emit("sendMessage", message, () => setMessage(""));
//     }
//   };

//   return (
//     <div className={classes.outerContainer}>
//       <div className={classes.container}>
//         <InfoBar room={room} socket={socket} />
//         <Messages messages={messages} name={name} />
//         <Input
//           message={message}
//           setMessage={setMessage}
//           sendMessage={sendMessage}
//         />
//       </div>
//       {/* <TextContainer users={users}/> */}
//     </div>
//   );
// };
import React from "react";

export const Chat = () => {
  return <div>Chat inside</div>;
};
