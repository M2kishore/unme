import ProfilePic from '../../assets/profilepic.jpg'
const FriendText = () => {
    return ( 
        <div className="card friend-text grey lighten-2">
            <span><img className="circle" src={ProfilePic} height="20" width="20"/><p> Message that you have sent to me</p></span>
        </div>
     );
}
 
export default FriendText;