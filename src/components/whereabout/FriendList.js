import React from 'react'
import FriendSummary from "./FriendSummary";
const FriendList = () => {
    return (
        <div className="friend-list">
            <FriendSummary />
            <FriendSummary />
            <FriendSummary />
        </div>
    );
}

export default FriendList;