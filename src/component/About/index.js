import React from "react";
import { Creative , CreativInfo , TitleSpan , InfoDesc , InfoDir , InfoTitle , Linkk} from './Style.js'

const About = () =>{
    return (
        <Creative>
        <div class="container">
            <CreativInfo>
                <InfoTitle><TitleSpan>This is</TitleSpan> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Linkk>explicabo</Linkk> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativInfo>
            </div>
        </Creative>
    )
}

export default About;