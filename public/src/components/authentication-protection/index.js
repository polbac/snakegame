import React, { Component } from 'react';

export default class AuthenticationProtection extends Component {
    
    componentDidlMount(){
        const liLogin = function() { // Setup an event listener to make an API call once auth is complete
            window.IN.UI.Authorize().params({"scope":["r_basicprofile", "r_emailaddress"]}).place();
            window.IN.Event.on(window.IN, 'auth', getProfileData);
        }
    
        var getProfileData = function() { // Use the API call wrapper to request the member's basic profile data
        console.log(1)    
        window.IN.API.Profile("me").fields("id,firstName,lastName,email-address,picture-urls::(original),public-profile-url,location:(name)").result(function (me) {
                console.log(me);
                var profile = me.values[0];
                var id = profile.id;
                var firstName = profile.firstName;
                var lastName = profile.lastName;
                var emailAddress = profile.emailAddress;
                var pictureUrl = profile.pictureUrls.values[0];
                var profileUrl = profile.publicProfileUrl;
                var country = profile.location.name;
            });
        }
    }

    render(){
        return (
            <div>
                <script type="in/Login"></script>
            </div>
        );
    }   
}