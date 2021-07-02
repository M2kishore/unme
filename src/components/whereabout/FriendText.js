import ProfilePic from '../../assets/profilepic.jpg'
import './index.css'
const FriendText = () => {
    return ( 
        <div className="card text-message grey lighten-2">
            <span><img className="circle" src={ProfilePic} height="20" width="20"/><p> Message that you have sent to me</p></span>
        </div>
     );
}
 
export default FriendText;