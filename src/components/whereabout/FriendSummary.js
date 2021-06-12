import ProfilePic from '../../assets/profilepic.jpg'
const FriendSummary = () => {
    return (
        <div className="friend-summary row">
            <div className="card horizontal col s12 m5">
                <div className="card-image">
                    <img src={ProfilePic} height="70" width="100" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>If this is the name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendSummary;