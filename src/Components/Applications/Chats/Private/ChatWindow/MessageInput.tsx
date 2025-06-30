import { FormEvent, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { TypeMessageHere } from "../../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { replyByUserAsync, sendMessageAsync } from "../../../../../ReduxToolkit/Reducers/ChatSlice";
import ChatDropMenu from "./ChatDropdown";
import EmojiPicker from "emoji-picker-react";

const MessageInput = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const addEmoji = (emoji: string) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message: string) => {
    setMessageInput(message);
  };

  const handleMessagePress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var container = document.getElementsByClassName("msger-chat")[0];
    setTimeout(() => {
      container?.scrollBy({ top: 200, behavior: "smooth" });
    }, 310);
    let currentUserId = currentUser?.id;
    let selectedUserId = selectedUser?.id;
    let selectedUserName = selectedUser?.name;
    if (messageInput.length > 0) {
      dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
      setMessageInput("");
      setTimeout(() => {
        const replyMessage = "Hey This is " + selectedUserName + ", Sorry I'm busy right now, I will text you later";
        dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
      }, 2000);
    }
  };
  return (
    <Form className="msger-inputarea" onSubmit={handleMessagePress}>
      <ChatDropMenu />
      <Input className="msger-input two uk-textarea shadow-none" type="text" placeholder={TypeMessageHere} value={messageInput} onChange={(e) => handleMessageChange(e.target.value)} />
      <div>{showEmojiPicker ? <EmojiPicker onEmojiClick={({ emoji }) => addEmoji(emoji)} /> : null}</div>
      <div className="smiley-box">
        <div className="picker second-btn uk-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
      </div>
      <Button color="primary" className="msger-send-btn">
        <i className="fa fa-location-arrow" />
      </Button>
    </Form>
  );
};

export default MessageInput;
