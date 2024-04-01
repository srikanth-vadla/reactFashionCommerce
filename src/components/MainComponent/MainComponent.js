import React, { useState } from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'
function MainComponent() {
 let [sortDetails,setSortDetails] = useState("name");

  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4'>
    <SideNav setSortData={setSortDetails}/>
    </div>
    <div className='col-lg-10 col-md-9 col-sm-8'>
    <Products sortData={sortDetails}/>
    </div>


    </div>
    </div>

  )
}

export default MainComponent