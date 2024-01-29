import React from "react";

import {ProfileList , ProfileSkillsDiv , ProfileItem , ProfileDiv , ListSpan , ItemSpan , BarTitle , BarDiv, BarSpan , SkillsDiv , SkillsDesc , Parent , ParentSpan} from './Style.js'


const Profile = () =>{


    return (
        <ProfileSkillsDiv>
        <div class="container">
            <ProfileDiv>
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ProfileList>
                    <ProfileItem>
                        <ListSpan>Name</ListSpan>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <ListSpan>Birthday</ListSpan>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <ListSpan>Address</ListSpan>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <ListSpan>Phone</ListSpan>
                        4444 5555 ListSpan6666
                    </ProfileItem>
                    <ProfileItem>
                        <ListSpan>Email</ListSpan>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem>
                        <ListSpan>Website</ListSpan>
                        <ItemSpan class="web">www.Google.com</ItemSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileDiv>
            <SkillsDiv>
                    <BarTitle>Some <span>skills</span></BarTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <BarDiv>
                        <BarSpan >Bootstrap</BarSpan>
                        <BarSpan >100%</BarSpan>
                        <Parent>
                            <ParentSpan></ParentSpan>
                        </Parent>
                    </BarDiv>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </SkillsDiv>
                
            </div>
        </ProfileSkillsDiv>
            
    )
}

export default Profile;