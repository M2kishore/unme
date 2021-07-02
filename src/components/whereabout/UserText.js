import ProfilePic from '../../assets/profilepic.jpg'
const UserText = () => {
    return ( 
        <div className="card text-message  grey lighten-5">
            <span><img className="circle" src={ProfilePic} height="20" width="20"/>
            <p> Message that I have wrtten to you</p></span>
        </div>
     );
}
 
export default UserText;