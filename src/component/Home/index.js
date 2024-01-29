import React from "react";
import  './Style.js'
import { HomeAll , HomeInformation , HomeTitle , HomeInfo , Paragraph , TheSpan , Button} from "./Style.js";


const Home = () =>{
    return (
        <HomeAll>
        <div className="container">
            <HomeInformation>
                <HomeTitle className="home-title margin-bottom">Yusef Keto</HomeTitle>
                <HomeInfo className="home-info">Web Devloper</HomeInfo>
                <Paragraph className="home-desc">
                    Iam a professional <TheSpan>Front End Devloper</TheSpan> creating modern and resposive designs to Web. Let us work together. Thank you. 
                </Paragraph>
                <Button className="home-btn">Let's Begin</Button>
            </HomeInformation>
        </div>
    </HomeAll>
    
    )
}

export default Home;