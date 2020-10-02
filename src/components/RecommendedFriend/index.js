import React, {Component} from 'react';
import FollowFriendListItem from '../FollowFriendItem/index';
import './style.css';


class RecommendedFriend extends Component{
    render(){
        const {friends} = this.props;
        return(
            <div className="RecommendedFriends">
                <div className="header">
                    <span>Gợi ý cho bạn</span>
                    <a href="#">Xem tất cả</a>
                </div>
                {
                    friends.map((friend , index)=>(
                        <FollowFriendListItem key={index} friend={friend}/>
                    ))
                }
            </div>

        
            
        );
    }
}

export default RecommendedFriend;