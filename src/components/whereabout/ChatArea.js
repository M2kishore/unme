import React,{ useState } from "react";
import FriendText from "./FriendText"
import UserText from "./UserText"

const ChatArea = () => {
    const [chat, setChat] = useState({
        me: 'What i said',
        you: 'What you said'
    })
    return (
        <div className="chat-area card row container">
            <div className="col s12 m11">
                <FriendText />
            </div>
            <div className="col s12 m11 offset-m1">
                <UserText />
            </div>
            <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s9">
          <input id="message" type="text" className="validate"/>
          <label for="message">Message</label>
        </div>
        <div className="input-field col s1">
          <button type="submit" className="btn small">&gt;</button>
        </div>
      </div>
    </form>
  </div>
        </div>
    );
}

export default ChatArea;