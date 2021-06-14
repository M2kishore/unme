import FriendText from "./FriendText"
import UserText from "./UserText"

const ChatArea = () => {
    return ( 
        <div className="chat-area row container">
        <div className="col s12 m11">
            <FriendText/>
        </div>
        <div className="col s12 m11 offset-m1">
            <UserText/>       
        </div>
        </div>
     );
}
 
export default ChatArea;