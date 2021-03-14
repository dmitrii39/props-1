import React from 'react'
import Star from './Star'
// import {useState} from 'react';

function Stars({count}) {
    
    

    return (
        <div>
            <ul className="card-body-stars u-clearfix">

    
     {count.map((item)=> <li key={item} className={count.length < 1 || count.length > 5 ? 'none' : 'star_list'}> <Star /> </li> )}
     {console.log(count.length)}
     </ul>
        </div>
        
    )
    
}



export default Stars

// star_list