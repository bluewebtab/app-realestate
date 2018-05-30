import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  

    
  
  
    
    scrollTo() {
      scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
  
  
        
  
      
  
      
    
    render() {
      return (
        <section id = "banner">
    <h1 className = " name">Rentaloo</h1>
    <p className="banner-desc">Find your Future Home!</p>
    <a className="travelbtn" to="#listings" onClick={() => this.scrollTo()} >Search</a>
    </section>);
                   
  
  
            
            
           
            {/* <Element name="scroll-to-element" className="element">
              Scroll to element
          </Element> */}
  
            {/* <Element className="element" id="scroll-container" style={{
              position: 'relative',
              height: '200px',
              overflow: 'scroll',
              marginBottom: '100px'
            }}> */}
  
              
            
    
    }

  }
  

  
  
  
 
 

