/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { AllMemberType, ChatsTypes, MessageTypes } from "../../../../../Types/Applications";
import { fetchChatMemberAsync, setChats, setSelectedUser } from "../../../../../ReduxToolkit/Reducers/ChatSlice";
import { dynamicImage, Image } from "../../../../../Utils";
import SendMessage from "./MessageInput";

const ChatBody = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      const chat = chats.filter((x: ChatsTypes) => x.users.includes(currentUserId));
      const selectedUser = chats[0].users.find((x: number) => x !== currentUserId);
      const oneSelect = allMembers.find((x: AllMemberType) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch(setChats(chat));
        dispatch(setSelectedUser(oneSelect));
      }
      if (allMembers.length > 0) {
        return allMembers.find((x: AllMemberType) => x.id === selectedUser);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchChatMemberAsync());
    fetchChatAsync();
    setScroll(1);
  }, [dispatch, allMembers.length, chats.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat = allMembers && chats && selectedUser ? chats.find((x: ChatsTypes) => x.users.includes(currentUser?.id as number) && x.users.includes(selectedUser.id)) : null;

  return (
    <div className="right-sidebar-Chats">
      <div className="msger">
        <div className="msger-chat">
          {selectedChat && selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((item: MessageTypes, id: number) => {
              const participators = allMembers.find((x: AllMemberType) => x.id === item.sender);
              return (
                <div className={`msg ${item.sender === currentUser?.id ? "right" : "left"}-msg`} key={id}>
                  <Image src={dynamicImage(`${item.sender === currentUser?.id ? participators?.image : selectedUser?.image}`)} className="rounded-circle img-30 h-auto" alt="user" />
                  <div className="msg-bubble mx-2">
                    <div className="msg-info">
                      <div className="msg-info-name">{item.sender === currentUser?.id ? participators?.name : selectedUser?.name}</div>
                      <div className="msg-info-time">{item.time}</div>
                    </div>
                    <div className="msg-text">{item.text}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <Image className="img-fluid w-100" src={dynamicImage(`start-conversion.jpg`)} alt="start conversion" />
          )}
        </div>
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatBody;