'use client';
import React from 'react';
import MenuList from '../Reusable-components/MenuList';
import NavLinks from '../Reusable-components/Navlinks';
import Statistics from './Statistics';

const LibraryStatistics = () => {
  return (
  
    <div className="schools-section pt-50 pb-50">
    <div className="container">
        <div className="row">
            <h2 className="universityobject-heading dark-mode-white-color">SGU Library</h2>
            <MenuList dept="Schools" subMenu={NavLinks}/>
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 col-lg-8 dept-content" data-target="#menu-navbar" data-offset="0">
                    <Statistics/>
                </div> 
        </div>
    </div>
    </div>
  
  
  
      )
    }
    
  


export default LibraryStatistics