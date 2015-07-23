/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';


const ProfileSocialSummary = React.createClass({
    render: function(){
        console.log("Rendering ProfileSocialSummary");
        let followerCount = this.props.followerCount;
        let followingCount = this.props.followingCount;
        let groupsCount = this.props.groupsCount;
        return (
            <div className= {"profile--socialsummary"} >
                <div className="row">
                    <div className="small-4 columns"><h6>Følger</h6><p>{followerCount}</p></div>
                    <div className="small-4 columns"><h6>Grupper</h6><p>{groupsCount}</p></div>
                    <div className="small-4 columns"><h6>Følgere</h6><p>{followingCount}</p></div>
                </div>
            </div>
        );
    }
});

export default ProfileSocialSummary;