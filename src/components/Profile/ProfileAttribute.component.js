/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';


const ProfileAttribute = React.createClass({

    propTypes: function(){
        return {
            name: React.PropTypes.string,
            value: React.PropTypes.string,
            editable: React.PropTypes.bool,
        }
    },

    handleChange: function(event) {
        console.log("change name")
        //  TODO: create changeName action
    },

    render: function(){
        console.log("Rendering ProfileAttribute");
        let name = this.props.name;
        let value = this.props.value;
        let isEditable = this.props.editable;
        let component = <h3 className={"profile--displayname"}>{value}</h3>;
        if(isEditable === true){
            component = <input type="text" className={"profile--displayname"} defaultValue={value} onChange={this.handleChange}></input>;
        }
        return (<div>{component}</div>);
    }
});

export default ProfileAttribute;