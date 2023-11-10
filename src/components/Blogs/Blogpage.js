import React from 'react'
import Bottombar from './Bottombar'
import MainInte from './MainInte'
import Rightsection from './Rightsection'
import Sidebar from './Sidebar'

const Blogpage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-white lg:col-span-8 col-span-1 px-2 lg:px-28 pb-8">
          <MainInte />
        </div>
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] hidden lg:block col-span-3">
          <Rightsection />
        </div>
        <div className='lg:hidden'>
          <Bottombar />
        </div>
      </div>
    </div>

  )
}

export default Blogpage
