import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {selectDirectorySection} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'
import './directory.style.scss'
const  Directory=({sections})=> (
    
       
            <div className="directory-menu">
                {sections.map(section=>(
                        <MenuItem key={section.id}
                         title={section.title} 
                         imageUrl={section.imageUrl}
                          size={section.size}
                          linkUrl={section.linkUrl}
                          />
                 ) )}
            </div>
     
    
)
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySection
})

export default connect (mapStateToProps)(Directory)
