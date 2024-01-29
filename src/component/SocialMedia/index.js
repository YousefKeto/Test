import React, { Component, useEffect, useReducer, useRef, useState } from "react";
import {SocialHome , Social , Icon , Paragraph , Span , SpanInfo} from'./Style.js';
import axios from 'axios'


  class SocialMedia  extends React.Component {


state = {
    social : []
}

componentDidMount(){
    axios.get("js/data.json")
    .then(res => {
        this.setState({social : res.data.social})
    })
}


render(){

    const {social} = this.state 

    const socialList = social.map((socialItem) => {
        return(
            
            
            <Social item = {socialItem.id}key = {socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Paragraph>
                    <Span >{socialItem.title}</Span>
                    <SpanInfo >{socialItem.body}</SpanInfo>
                </Paragraph>
            </Social>
            

        
        )
    } )

    

    return (
        <SocialHome>

{socialList}
</SocialHome>
    )
}}

export default SocialMedia;