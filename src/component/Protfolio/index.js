import React, { useEffect, useState } from "react";
import {Portfolio, PortfolioItem, PortfolioList, PortfolioTitle , BoxDiv , BoxImg , SSpan ,BoxOverlay , OverlaySpan} from './Style.js'
import axios from "axios";


const Protfolio = () =>{


    const [images , setImages] = useState([]) 

useEffect( () => {
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
}, [])



const PortfolioImages = images.map((imageItem) => {
    return(
            
        <BoxDiv key={imageItem.id}>
        <BoxImg src={imageItem.image} alt=""/>
        <BoxOverlay>
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </BoxOverlay>
    </BoxDiv>
    

    )
})

    return (
        <Portfolio>
        <PortfolioTitle><SSpan>My</SSpan> Portfolio</PortfolioTitle>
        <PortfolioList >
            <PortfolioItem active="true">All</PortfolioItem>
            <PortfolioItem  >HTML</PortfolioItem>
            <PortfolioItem  >Photoshop</PortfolioItem>
            <PortfolioItem  >Wordpress</PortfolioItem>
            <PortfolioItem  >Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className="box">
        {PortfolioImages}
            
        </div>
        
    </Portfolio>
    )
}

export default Protfolio;