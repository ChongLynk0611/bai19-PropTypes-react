import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

class FollowFriendItem extends Component{
    render(){
        const {friend} = this.props;
        return(
            <div className="FollowFriendListItem">
                <img src ={friend.url} alt=""></img>
                <div className="info">
                    <span>{friend.name}</span>
                    <span>Gợi ý cho bạn</span>
                </div>
                <a href="#">Theo dõi</a>
            </div>
        );
    }
}
FollowFriendItem.propTypes ={
    friend: PropTypes.shape({
        name:PropTypes.string,
        url:PropTypes.string
    })

}
export default FollowFriendItem;