import React, {Component} from 'react';
import './style.css';

class FollowFriendItem extends Component{
    render(){
        const name = this.props.name;
        return(
            <div className="FollowFriendListItem">
                <img src =' https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_03_18/avatar.jpg' alt=""></img>
                <div className="info">
                    <span>{name}</span>
                    <span>Gợi ý cho bạn</span>
                </div>
                <a href="#">Theo dõi</a>
            </div>
        );
    }
}

export default FollowFriendItem;