import React from 'react';
import ProfilePic from '../../assets/profilepic.jpg'
const FriendSummary = () => {
    return (
        <div className="friend-summary row">
            <div className="card horizontal z-depth-0">
                <div className="card-image">
                    <img src={ProfilePic} height="70" width="70"/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p className="header">Person name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendSummary;