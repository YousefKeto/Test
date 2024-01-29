import React from "react";
import { Link } from 'react-router-dom'
import {NavbarSection , Logo , LogoText , UlList , ListItem, Anchor }from"./Style.js"
import Contact from "../Contact";


const Navbar = () =>{
    return (
      
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>

                
                <UlList>
                    <ListItem className="list-item"><Link to="/">Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="">Protofolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><Link to= "/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>

        </NavbarSection>
        
    )
}

export default Navbar;