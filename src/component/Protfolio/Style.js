import styled  from "styled-components"



export const Portfolio = styled.div `
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;`

export const PortfolioTitle = styled.h2 `
text-align: center;
font-size: 35px;
`


export const SSpan = styled.span `
font-weight: normal
`

export const PortfolioList = styled.ul `
list-style: none;
text-align: center;
margin: 20px 0;
`

export const PortfolioItem = styled.li `
display: inline-block;
width: 100px;
padding: 10px;
background : ${props => props.active ? 'purple' : ''};
color : ${props => props.active ? '#fff' : '#000'}
`




export const BoxDiv = styled.div `
width: 25%;
float: left;
font-size: 0;
position: relative;

&:hover > p {
    opacity : 1;
}
`

export const BoxImg = styled.img `
width: 100%
`


export const BoxOverlay = styled.p `
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(260,150,230 , 0.5);
font-size: 15px;
opacity: 0;
margin :0;


&:hover {
    opacity: 1;
}
`

export const OverlaySpan = styled.span `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
display: block;
padding: 10px 20px;
cursor: pointer;
border: 2px solid purple;
`

