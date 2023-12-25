import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height: "100vh"}}>
      <PrettyChatWindow
        projectId="c8afaa38-197f-48fa-a3ac-8e5892c8f21c"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;

/*Basic Design*/
// import React from "react";
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// /* Use cases:
//     MultiChatSocket:A web socket that let the users to connect to all the chats they have done.
//     MultiChatWindow: UI that unfolds and lets the user type the msgs,see the msgs,etc.
//     useMultiChatLogic:It is all the state management and api calls that makes the chat app work.

// */

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "c8afaa38-197f-48fa-a3ac-8e5892c8f21c",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

// export default ChatsPage;
