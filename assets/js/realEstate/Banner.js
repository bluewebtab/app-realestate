import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      name: "ron"
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
    <div className= " group center-xs center-sm center-md center-lg">
    <h1 className = " name ">
    Rentaloo
    <br/>
    <span className="banner-desc">Find your future home!</span>
    <br/>
    <a className="travelbtn " to="#listings" onClick={() => this.scrollTo()} >Search</a>
    </h1>
    </div>
    
   
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
  

  
  
  
 
 

