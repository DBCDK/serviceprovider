/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';


const ProfileHeader = React.createClass({

    toggleEdit: function(e){
        console.log("toggle edit");
    },

    render: function(){
        console.log("Rendering ProfileHeader");
        return (
            <div className={"profile--header"}>
                <div className="row">
                    <div className="small-4 columns"><p></p></div>
                    <div className="small-4 columns"><h2>Profil</h2></div>
                    <div className="small-4 columns"><a onClick={this.toggleEdit}>Rediger</a></div>
                </div>
            </div>
        );
    }
});

export default ProfileHeader;