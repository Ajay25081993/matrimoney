import React from "react";
import { useChatStore } from "../../store/useChatStore";

import Sidebar from "../../components/Sidebar";
import NoChatSelected from "../../components/NoChatSelected";
import ChatContainer from "../../components/ChatContainer";
import Navbar from "../../components/Navbar";
const Inbox = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-white">
        <Navbar/>
      <div className=" flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex border-1 border-gray-400 h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
