import ChatArea from "./ChatArea"
import FriendList from "./FriendList"

const WhereAbout = () => {
    return ( 
        <div className="whreabout row container">
            <div className="col s12 m5">
                <FriendList />
            </div>
            <div className="col s12 m6 offset-m1">
                <ChatArea />
            </div>
        </div>
     );
}
 
export default WhereAbout;